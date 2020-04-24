/**
 * ESLint root config
 **/
module.exports = {
  root: true,

  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },

  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb'
  ],

  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
    'comma-dangle': ['error', 'never'],
    'react/prop-types': 0,
    'react/jsx-indent': ["error", 2],
  }
};
