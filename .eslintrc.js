module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    "parser": "typescript-eslint-parser",
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    "eslint:recommended",
    "typescript",
    "plugin:vue/recommended",
    "plugin:prettier/recommended"
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: ["vue"],
  // ここにカスタムルールを追加します。
  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { semi: false }],
    "typescript/no-var-requires": false
  }
};
