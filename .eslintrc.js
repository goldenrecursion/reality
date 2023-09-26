module.exports = {
  root: true,

  parser: "@typescript-eslint/parser",

  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
  ],

  plugins: ["import"],

  overrides: [
    {
      files: ["src/**"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
    },

    // all Typescript files, including config files
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/strict",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import/typescript",
      ],
      rules: {
        // we prefer the inferred return value of the function
        "@typescript-eslint/explicit-module-boundary-types": "off",

        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",

        // we override and allow some unused vars if they start with _
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],

        // these import rules are handled by typescript natively
        "import/default": "off",
        "import/named": "off",
        "import/namespace": "off",
        "import/no-named-as-default-member": "off",
        "import/no-unresolved": "off",
      },
    },
  ],

  env: {
    node: true,
  },

  // global rules
  rules: {
    // prevent mistaken access of properties on default export
    "import/no-named-as-default-member": "error",

    // consistent typescript type imports
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],

    // avoid using deprecated exports
    "import/no-deprecated": "warn",

    // enforce import ordering for cleaner diffs
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
        },
        warnOnUnassignedImports: false,
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
      },
    ],

    // to keep imports easy to read
    "import/no-useless-path-segments": "error",

    "no-console": "error",
    "no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
  env: {
    es6: true,
  },
  settings: {
    "import/resolver": {
      typescript: { alwaysTryTypes: false },
    },
  },
};
