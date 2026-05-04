import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import * as reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: [
      "dist/",
      "node_modules/",
      "*.min.js",
      ".prettierrc.ts",
      "eslint.config.ts",
      "vite.config.ts",
    ],
  },

  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: {
        // projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  js.configs.recommended,

  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  {
    plugins: {
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  }
);
