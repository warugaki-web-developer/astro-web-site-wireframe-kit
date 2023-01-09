module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.astro'],
  },
  overrides: [
    {
      files: ['./src/env.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'astro/no-set-html-directive': 'error',
        'astro/no-set-text-directive': 'error',
      },
    },
  ],
}
