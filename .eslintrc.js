module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@mate-academy/eslint-config-react-typescript'],
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'linebreak-style': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
