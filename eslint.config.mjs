import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import nextConfigRecommended from "@next/eslint-plugin-next/lib/configs/recommended.js";
import reactHooksRecommended from "eslint-plugin-react-hooks/lib/configs/recommended.js";

export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactHooksRecommended,
  ...nextConfigRecommended.configs.recommended,
  {
    files: ["**/*.{js,mjs,jsx,tsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
      "@next/next": nextPlugin,
    },
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