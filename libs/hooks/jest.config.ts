/* eslint-disable */
export default {
  displayName: 'hooks',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/hooks',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
