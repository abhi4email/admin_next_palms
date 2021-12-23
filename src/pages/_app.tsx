import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import type { AppProps } from 'next/app';
//import { useRouter } from 'next/router';
import { LicenseInfo } from '@mui/x-data-grid-pro';

export default function App({ Component, pageProps }: AppProps) {
  LicenseInfo.setLicenseKey(
    '2054b848feba6eb919e9d4a7ac357bf2T1JERVI6MzA2MzMsRVhQSVJZPTE2NjUzMzc1MzcwMDAsS0VZVkVSU0lPTj0x',
  );

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
  //const router = useRouter();
  //signOut();
  React.useEffect(() => {
    if (loading) return;
    if (!isUser) {
      signIn();
    }
  }, [isUser, loading]);

  if (isUser) return children;

  return <div>Please wait...</div>;
}
