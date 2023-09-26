module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@antfu',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  // "overrides": [
  //   {
  //     "files": [
  //       "*.graphql",
  //       "*.gql"
  //     ],
  //     "parser": "@graphql-eslint/eslint-plugin",
  //     "plugins": [
  //       "@graphql-eslint"
  //     ]
  //   }
  // ],
  plugins: [],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'curly': ['warn', 'all'],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-console': 'off',
    'vue/require-default-prop': 'off',
    'vue/max-len': ['warn', 120],
    'vue/custom-event-name-casing': 'off',
    // 'prefer-template': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'warn',
    'vue/no-v-text-v-html-on-component': 'warn',
    'n/prefer-global/process': 'warn',
  },
}
