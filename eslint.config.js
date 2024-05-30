/* eslint-env node */
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  rules: {
    'no-console': 'off',
    'vue/no-unused-vars': 'warn',
    'unused-imports/no-unused-vars': 'warn',
    'node/prefer-global/process': 'warn',
    'vue/no-parsing-error': 'warn',
  },
}, ...compat.config({
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/migration-from-tailwind-2': 'off',
    'symbol-description': 'off',
  },
}))
