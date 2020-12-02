module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/*.test.ts'
  ],
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  transform: {
    '\\.(ts)$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  },
  modulePaths: [
    'src'
  ]
};
