import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    env: {
      commonjs: true,
      es2021: true,
      node: true,
    },
    extends: ["airbnb-base"],
    parserOptions: {
      ecmaVersion: 12,
    },
    rules: {
      "no-console": "off",
    },
  }, 
];
