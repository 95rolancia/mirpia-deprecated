module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/semi': 0,
    semi: 0,
    'comma-dangle': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
