module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'max-len': [2, 200, 4, { ignoreUrls: true }],
    'no-multi-spaces': ['error'],
    'no-mixed-spaces-and-tabs': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-trailing-spaces': ['error'],
    'semi': ['error', 'never']
  },
}