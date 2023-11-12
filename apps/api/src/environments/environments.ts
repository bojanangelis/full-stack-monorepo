import * as process from 'node:process';

export const apiEnv: IApiEnv = {
  isProd: process.env.FULL_STACK_ENV === 'production',
  api: {
    port: Number(process.env.FULL_STACK_API_PORT)
  },
  db: {
    url: process.env.DATABASE_URL
  }
};

export interface IApiEnv {
  isProd: boolean;
  api: {
    port: number;
  };
  db: {
    url: string;
  };
}
