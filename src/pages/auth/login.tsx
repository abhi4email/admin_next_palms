//import Button from '@mui/material/Button';
import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';

import Auth, { Group } from 'components/Auth';
import Layout from 'Layouts';

import { getCsrfToken, signIn } from 'next-auth/react';

export default function Login() {
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
      callbackUrl: 'http://localhost:3000/dashboard',
    }).then((login_res) => {
      //console.log("user Login Information",resulte);
      console.log('--- error ', login_res);
    });

    return false;
  };

  return (
    <Layout title="Login">
      <Auth title="Login" subTitle="Hello! Login with your email">
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <InputGroup fullWidth>
            <input type="text" placeholder="User name" id="username" name="username" />
          </InputGroup>
          <InputGroup fullWidth>
            <input type="password" placeholder="Password" name="password" id="password" />
          </InputGroup>
          <Group>
            <Checkbox checked onChange={onCheckbox}>
              Remember me
            </Checkbox>
            <Link href="/auth/request-password">
              <a>Forgot Password?</a>
            </Link>
          </Group>
          {/* <Button variant="contained" fullWidth>
            Login
          </Button> */}
          <Button status="Success" type="submit" shape="SemiRound" fullWidth>
            Login
          </Button>
        </Box>
      </Auth>
    </Layout>
  );
}

// // This is the recommended way for Next.js 9.3 or newer
// export async function getServerSideProps(context: any) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context)
//     }
//   }
// }
