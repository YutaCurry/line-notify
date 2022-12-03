import { defaultClient } from './clients';

export async function lineNotify(message: string, lineNotifyToken: string) {
  // const url =
  // const options = {
  //     method: 'post',
  //     contentType: 'application/x-www-form-urlencoded',
  //     headers: {
  //         Authorization: `Bearer ${lineNotifyToken}`,
  //     },
  //     payload,
  // }

  const res = await defaultClient.post(
    'https://notify-api.line.me/api/notify',
    {
      message,
    },
    {
      headers: {
        Authorization: `Bearer ${lineNotifyToken}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
    },
  );

  return {
    status: res.status,
    headers: res.headers,
    data: res.data,
  };
}
