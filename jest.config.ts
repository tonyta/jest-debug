import type {JestConfigWithTsJest} from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
