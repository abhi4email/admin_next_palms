import axios from 'axios';
import useSWR from 'swr';
import { fetcherPost, fetcherGet, fetcherGetParams } from '../index';
import { useSession } from 'next-auth/react';

export const getCustomers = (reqdata: any) => {
  const { data: session } = useSession();
  //console.log('Token Data data', session.accessToken);
  const { data: customers, error } = useSWR(['/get_customers_by_route', reqdata, session.accessToken], fetcherPost);
  return { customers, error };
};
