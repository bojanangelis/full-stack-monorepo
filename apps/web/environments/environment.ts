import * as process from 'node:process';

export const webEnv: IWebEnv = {
  isProd: process.env.FULL_STACK_ENV === 'production',
  api: {
    gqlUrl: process.env.FULL_STACK_WEB_GQL_URL!
  }
};

export interface IWebEnv {
  isProd: boolean;
  api: {
    gqlUrl: string;
  };
}
