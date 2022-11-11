module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest'],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^(pages|containers|components|sections|constants|models|remotes|styles|sass|utils|hooks|stores)/(.*)':
      '<rootDir>/src/$1/$2',
  },
  // testTimeout: 50000,
  // setupFilesAfterEnv: ['./jest.setup.js'],
};
