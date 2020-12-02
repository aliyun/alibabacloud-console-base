module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/test/**/*.ts'
  ],
  collectCoverageFrom: [
    'test/**/*.ts'
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
