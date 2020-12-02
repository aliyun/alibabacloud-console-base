module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/tests/**/*.spec.ts'
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
