import NextAuth from 'next-auth';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Credentials from 'next-auth/providers/credentials';

async function refreshJwt(refreshToken: any) {
  const res = await axios.post(
    process.env.NEXT_PUBLIC_BASE_URL + '/api/token/refresh/',
    {
      refresh: refreshToken,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return res.data;
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const res = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + '/api/token/', {
          username: credentials.username,
          password: credentials.password,
        });

        const user = res.data;

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          return null;
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL

          //throw new Error("error message");
        }
      },
    }),
  ],
  callbacks: {
    /**
     * @param  {object}  token     Decrypted JSON Web Token
     * @param  {object}  user      User object      (only available on sign in)
     * @param  {object}  account   Provider account (only available on sign in)
     * @param  {object}  profile   Provider profile (only available on sign in)
     * @param  {boolean} isNewUser True if new user (only available on sign in)
     * @return {object}            JSON Web Token that will be saved
     */
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user && account) {
        const decoded = jwt_decode(String(user.access));
        token.accessToken = user.access;
        token.refreshToken = user.refresh;
        // @ts-ignore
        token.accessTokenExpires = decoded.exp;
        return token;
      }
      // @ts-ignore
      if (Date.now() <= token.accessTokenExpires) {
        return token;
      }

      const newJwt = await refreshJwt(token.refreshToken);
      if (newJwt) {
        token.accessToken = newJwt.access;
        // @ts-ignore
        const decoded = jwt_decode(newJwt.access);
        // @ts-ignore
        token.accessTokenExpires = decoded.exp;
        return token;
      }
      return {};
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 86400, // 30 days
  },
  secret: 'nI+cD/bV4Cf6Q08a5p2nEA+U3nw005W630QhCkF0UEk=',
});
