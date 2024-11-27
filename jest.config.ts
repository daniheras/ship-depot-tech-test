import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/app/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
}

export default createJestConfig(config)