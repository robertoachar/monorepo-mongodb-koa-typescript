import type { Config } from '@jest/types';

const config: Config.InitialProjectOptions = {
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/*.ts', '<rootDir>/packages/**/*.ts'],
};

export default config;
