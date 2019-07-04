// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // extends: 'standard',
  // required to lint *.vue files
  // plugins: [
  //   'html'
  // ],
  // add your custom rules here
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  rules: {
    // allow async-await
    "semi": ["error","never"],
    "comma-spacing": "error",
    "quotes": ["error", "single"],
    "space-before-function-paren": "error",
    "no-multi-spaces": "error",
    "vue/html-self-closing": "off",
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
