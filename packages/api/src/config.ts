import { resolve } from 'path';
import { env } from 'process';
import dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, '../.env') });

interface Config {
  DATABASE: string;
}

const environment: string[] = ['DATABASE'];
environment.forEach((value: string) => {
  if (!env[value]) {
    throw new Error(`${value}: ${env[value]}`);
  }
});

export const config: Config = {
  DATABASE: env['DATABASE'] as string,
};
