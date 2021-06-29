module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // ; no final
    semi: ['error', 'always'],

    // aspas simples
    quotes: ['error', 'single'],

    // permitir console.log, console.warn e tals
    'no-console': 'off',

    // máximo de caracteres por linha, pra não deixarmos muitos códigos inline
    // tamanho do TAB
    'max-len': [
      'warn',
      {
        code: 85, comments: 100, tabWidth: 2, ignoreTrailingComments: true,
      },
    ],

    // coisas que não farão muita diferença no nosso proj, mas são pro eslint não chiar
    'no-use-before-define': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'no-else-return': 'off',

    // permiitr que a gente use js e não jsx
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    // Os 'enter' do window e do linux são diferentes, essa regra fala pra ele não chiar com isso
    'linebreak-style': 'off',

    // permitir que façamos props spreading ({ ...props })
    'react/jsx-props-no-spreading': 'off',
  },
};
