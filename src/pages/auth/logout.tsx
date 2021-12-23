import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
export default function Index() {
  const router = useRouter();
  signOut({ callbackUrl: process.env.NEXTAUTH_URL + '/auth/login' });
  return null;
}
