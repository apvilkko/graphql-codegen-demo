module.exports = {
  extends: ['../.eslintrc.react.js'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
      },
    },
    {
      files: ['src/generated/**/*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
}
