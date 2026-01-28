// eslint.config.js
import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist/*', 'node_modules/*', 'public/*'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.{js,ts,vue}'],
    rules: {
      // JS 规则
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      // TS 规则
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      // Vue 规则
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
      },
    },
  },
  // 必须放在最后：关闭与 Prettier 冲突的 ESLint 格式规则
  eslintConfigPrettier,
] satisfies tseslint.FlatConfig[]
