module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { 
            'prefer': 'type-imports' 
          }
        ],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            'multiline': {
              'delimiter': 'comma'
            },
            'singleline': {
              'delimiter': 'comma'
            },
            'overrides': {
              'interface': {
                'multiline': {
                  'delimiter': 'semi'
                }
              }
            }
          }
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            'selector': 'typeLike',
            'format': ['PascalCase']
          }
        ],
        '@typescript-eslint/no-duplicate-type-constituents': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-empty-interface': 'error',    
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/comma-spacing': 'error',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/semi': 'error'
      }
    }
  ]
}