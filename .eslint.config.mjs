import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle from 'eslint-config-dicodingacademy';

export default {
  extends: [
    pluginJs.configs.recommended,
    daStyle,
  ],
  files: ["**/*.js"],
  languageOptions: {
    sourceType: "commonjs",
    globals: globals.node,
  },
  // Add any other custom rules or settings here
};