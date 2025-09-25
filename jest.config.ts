export default {
  preset: 'ts-jest',
  testRegex: '^(?!.*e2e).*\\.spec\\.ts$',
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
