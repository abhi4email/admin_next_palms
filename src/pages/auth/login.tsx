import Button from '@mui/material/Button';
import React from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Auth, { Group } from 'components/Auth';
import Layout from 'Layouts';

import { getCsrfToken, signIn } from 'next-auth/react';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const onCheckbox = () => {
    // v will be true or false
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //eslint-disable-next-line no-console
    signIn('credentials', {
      redirect: false,
      username: data.get('username'),
      password: data.get('password'),
    }).then((login_res) => {
      //console.log("user Login Information",resulte);
      //console.log('--- error Recored ', login_res);
      let resp = login_res ? login_res['error'] : null;
      if (resp) {
        toast.error('Unable to login !!');
      } else {
        router.push('/dashboard');
      }
    });

    return false;
  };

  return (
    <Layout title="Login">
      <Auth title="Login" subTitle="Hello! Login with your user name or email">
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <TextField id="username" name="username" fullWidth label="User Name" variant="outlined" />
          <TextField name="password" id="password" type="password" fullWidth label="Password" variant="outlined" />
          <Group>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            <Link href="/auth/request-password">
              <a>Forgot Password?</a>
            </Link>
          </Group>
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Box>
      </Auth>
    </Layout>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
