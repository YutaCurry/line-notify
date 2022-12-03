import { lineNotify } from '.';
import dotenv from 'dotenv';

dotenv.config();

lineNotify('test', process.env.LINE_NOTIFY_TOKEN as string)
  .then((e) => console.log({ e }))
  .catch((e) => console.log(e));
