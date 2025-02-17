import { defineConfig } from 'eslint-define-config'
import pkg from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default defineConfig([
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/', '.next/**', 'dist/**', 'build/**', 'public/**'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        jsx: true,
        project: './tsconfig.json',
      },
    },
    plugins: {
      react: pkg,
      tailwindcss: eslintPluginTailwindcss,
      'react-hooks': eslintPluginReactHooks,
      prettier: eslintPluginPrettier,
      '@typescript-eslint': eslintPluginTypescript,
      import: eslintPluginImport,
      unicorn: eslintPluginUnicorn,
    },
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        callees: ['classnames', 'clsx'],
        config: 'tailwind.config.js',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/migration-from-tailwind-2': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'react/jsx-boolean-value': ['error', 'always'],
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-key': 'error',
      'react/self-closing-comp': 'warn',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['sibling', 'parent', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
    },
  },
])
