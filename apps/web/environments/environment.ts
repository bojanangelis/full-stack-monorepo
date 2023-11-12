import * as process from 'node:process';

export const webEnv: IWebEnv = {
  isProd: process.env.FULL_STACK_ENV === 'production',
  api: {
    gqlUrl: process.env.FULL_STACK_WEB_GQL_URL!
  },
  storage: {
    url: process.env.FULL_STACK_WEB_STORAGE_URL!,
    endpoint: process.env.FULL_STACK_WEB_STORAGE_ENDPOINT!
  }
};

export interface IWebEnv {
  isProd: boolean;
  api: {
    gqlUrl: string;
  };
  storage: {
    url: string;
    endpoint: string;
  };
}
