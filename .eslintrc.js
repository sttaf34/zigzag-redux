module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "jest": true
  },
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".tsx"]
      }
    },
    "react": {
      "version": "16.11"
    }
  },
  "rules": {
    "no-console": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] } ],
    "prettier/prettier": ["error", { "semi": false } ],
    "import/prefer-default-export": "off",

    // https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
    "import/extensions": [
      "error", "ignorePackages", { "ts": "never", "tsx": "never" }
    ]
  }
}