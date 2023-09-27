module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "standard-with-typescript",
    
  ],
  parserOptions: {
       project: './tsconfig.eslint.json'
     },
  ignorePatterns: ['dist', '.eslintrc.cjs',"*.js","*.json","vite.config.ts","vite-env.d.ts"],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
