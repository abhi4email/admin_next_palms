import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Layout from 'Layouts';

export default function Error(): JSX.Element {
  const router = useRouter();
  return (
    <Layout title="404 Page Not Found">
      <Card>
        <CardContent>
          <h1>404 Page Not Found</h1>
          <small>The page you were looking for doesn&apos;t exist</small>
          <CardActions>
            <Link href="/dashboard">
              <a>Take me home</a>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Layout>
  );
}
