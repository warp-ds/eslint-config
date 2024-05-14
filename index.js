module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  ignorePatterns: ['CHANGELOG.md', 'package-lock.json'],
  plugins: ['prettier', 'import'],
  rules: {
    semi: ['error'],
    indent: [
      'error',
      2,
      {
        MemberExpression: 'off',
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral *', 'ArrowFunctionExpression'],
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-body-style': ['error', 'as-needed'],
    curly: ['error', 'multi-line'],
    eqeqeq: ['error', 'smart'],
    'key-spacing': ['error', { mode: 'minimum' }],
    'object-curly-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'linebreak-style': 'error',
    'keyword-spacing': 'error',
    'space-infix-ops': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'no-trailing-spaces': 'error',
    'func-call-spacing': 'error',
    'arrow-spacing': 'error',
    'wrap-iife': 'error',
    'array-bracket-spacing': 'error',
    'nonblock-statement-body-position': 'error',
    'no-useless-return': 'error',
    'no-multiple-empty-lines': 'error',
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: "all",
        printWidth: 140,
        bracketSameLine: true
      }
    ],
    'import/order': ['error', {
      "groups": ["builtin", "external", "parent", "sibling", "index"],
      "pathGroups": [
        {
          "pattern": "{react,react-dom/**,vue,lit}",
          "group": "external",
          "position": "before"
        }
      ],
      "pathGroupsExcludedImportTypes": ["react", "vue", "lit"],
      "newlines-between": "always",
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }],
    'import/newline-after-import': ['error', { "count": 1 }],
    'import/first': 'error',
    'import/no-duplicates': 'error'
  },
};
