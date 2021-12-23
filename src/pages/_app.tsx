import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children }) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  const loading = status === 'loading';
  const router = useRouter();
  //signOut();
  React.useEffect(() => {
    if (loading) return;
    if (!isUser) {
      signIn();
      //router.push('/auth/login');
    }
  }, [isUser, loading]);

  if (isUser) return children;

  return <div>Please wait...</div>;
}
