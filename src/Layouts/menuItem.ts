import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Dashboard',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Customers',
    icon: { name: 'people-outline' },
    children: [
      {
        title: 'All',
        link: { href: '/customer/all' },
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: '404',
        link: { href: '/miscellaneous/404' },
      },
    ],
  },
  {
    title: 'Auth',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Testing ',
        children: [
          {
            title: 'Testing 2',
            children: [
              {
                title: 'Testing 3',
                link: { href: '/auth/login' },
              },
            ],
          },
        ],
      },
      // {
      //   title: 'Login',
      //   link: { href: '/auth/login' },
      // },
      // {
      //   title: 'Register',
      //   link: { href: '/auth/register' },
      // },
      // {
      //   title: 'Request Password',
      //   link: { href: '/auth/request-password' },
      // },
      // {
      //   title: 'Reset Password',
      //   link: { href: '/auth/reset-password' },
      // },
    ],
  },
];

export default items;
