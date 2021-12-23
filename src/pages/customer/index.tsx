import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Layout from 'Layouts';

export default function Error(): JSX.Element {
  const router = useRouter();
  return (
    <Layout title="Customer list">
      <Card>
        <CardContent>
          <h1>Customer list</h1>
          <small>customer data grid will be here</small>
        </CardContent>
      </Card>
    </Layout>
  );
}
