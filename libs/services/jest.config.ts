/* eslint-disable */
export default {
  displayName: 'services',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/services',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
