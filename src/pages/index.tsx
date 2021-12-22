import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard');
  }),
    [];
  return <div />;
}
