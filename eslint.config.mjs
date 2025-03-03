import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,jsx,tsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
      "@next/next": nextPlugin, 
    },
    extends: [
      pluginJs.configs.recommended,
      pluginReact.configs.flat.recommended,
      "plugin:react-hooks/recommended",
      "plugin:@next/next/recommended",
    ],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "eqeqeq": "error",
      "indent": ["error", 2],
      "react/prop-types": "off", 
      "react/react-in-jsx-scope": "off", 
      "react-hooks/exhaustive-deps": "warn", 
      "@next/next/no-img-element": "warn", 
      "@next/next/no-html-link-for-pages": "error", 
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];