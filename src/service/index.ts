import axios from 'axios';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

//Post Request
export const fetcherPost = (url: string, data: any, token: string) =>
  axios
    .post(baseUrl + url, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
    .then((res: { data: any }) => res.data);

//Get Request Wityout query
export const fetcherGet = (url: string, token: string) =>
  axios
    .get(baseUrl + url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
    .then((res: { data: any }) => res.data);

//Get With parameter
export const fetcherGetParams = (url: string, data: any, token: string) =>
  axios
    .get(baseUrl + url, {
      params: data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
    .then((res: { data: any }) => res.data);
