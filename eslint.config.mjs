// @ts-check
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default tseslint.config(
  {
    ignores: ['*.mjs', 'node_modules', 'dist']
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintConfigPrettier,
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    rules: {
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends'
        }
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
)
