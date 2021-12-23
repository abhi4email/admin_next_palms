import { MenuItemType } from '@paljs/ui/types';

let availabilities_menu = {
  title: 'Availabilities',
  icon: { name: 'bulb-outline' },
  children: [
    {
      title: 'Add Menu',
      link: { href: '/#' },
    },
  ],
};

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
    title: 'Marketing',
    icon: { name: 'shopping-bag-outline' },
    children: [
      {
        title: 'Add Menu',
        link: { href: '/#' },
      },
    ],
  },
  {
    title: 'Shipments',
    icon: { name: 'car-outline' },
    children: [
      {
        title: 'Add Menu',
        link: { href: '/#' },
      },
    ],
  },
  {
    title: 'Loads',
    icon: { name: 'shopping-cart-outline' },
    children: [
      {
        title: 'Add Menu',
        link: { href: '/#' },
      },
    ],
  },
  {
    title: 'Orders',
    icon: { name: 'star-outline' },
    children: [
      {
        title: 'Add Menu',
        link: { href: '/#' },
      },
    ],
  },
  {
    title: 'Driver Pickup',
    icon: { name: 'speaker-outline' },
    children: [
      {
        title: 'Add Menu',
        link: { href: '/#' },
      },
    ],
  },
  {
    title: 'Packing',
    icon: { name: 'stop-circle-outline' },
    children: [
      {
        title: 'Add Menu',
        link: { href: '/#' },
      },
    ],
  },
  {
    title: 'Invoicing',
    icon: { name: 'repeat-outline' },
    children: [
      {
        title: 'Add Menu',
        link: { href: '/#' },
      },
    ],
  },
  {
    title: 'Claims',
    icon: { name: 'search-outline' },
    children: [
      {
        title: 'Add Menu',
        link: { href: '/#' },
      },
    ],
  },
  {
    title: 'Accounts Receivable',
    icon: { name: 'shield-outline' },
    children: [
      {
        title: 'Add Menu',
        link: { href: '/#' },
      },
    ],
  },
  {
    title: 'Customer',
    icon: { name: 'person-outline' },
    children: [
      {
        title: 'All',
        link: { href: '/customer?route=All' },
      },
    ],
  },
  {
    title: 'Admin',
    icon: { name: 'layers-outline' },
    children: [
      {
        title: 'Add Menu',
        link: { href: '/#' },
      },
    ],
  },
  // {
  //   title: 'Miscellaneous',
  //   icon: { name: 'shuffle-2-outline' },
  //   children: [
  //     {
  //       title: '404',
  //       link: { href: '/miscellaneous/404' },
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: { name: 'lock-outline' },
  //   children: [
  //     {
  //       title: 'Testing ',
  //       children: [
  //         {
  //           title: 'Testing 2',
  //           children: [
  //             {
  //               title: 'Testing 3',
  //               link: { href: '/auth/login' },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     // {
  //     //   title: 'Login',
  //     //   link: { href: '/auth/login' },
  //     // },
  //     // {
  //     //   title: 'Register',
  //     //   link: { href: '/auth/register' },
  //     // },
  //     // {
  //     //   title: 'Request Password',
  //     //   link: { href: '/auth/request-password' },
  //     // },
  //     // {
  //     //   title: 'Reset Password',
  //     //   link: { href: '/auth/reset-password' },
  //     // },
  //   ],
  // },
];

items.push({
  title: 'Availabilities',
  icon: { name: 'bulb-outline' },
  children: [
    {
      title: 'Add Menu',
      link: { href: '/#' },
    },
  ],
});

export default items;
