module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      // @react-native/babel-preset parses `@flow` files with flow-parser, which
      // returns no tokens, and @babel/eslint-parser then crashes. Lint parses
      // with its own syntax-only Babel options instead of babel.config.js.
      files: ['*.js', '*.jsx'],
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          plugins: ['@babel/plugin-syntax-flow', '@babel/plugin-syntax-jsx'],
        },
      },
    },
  ],
};
