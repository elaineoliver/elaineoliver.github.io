import globals from "globals";
import pluginJs from "@eslint/js";
import { configs as litConfigs } from "eslint-plugin-lit";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    ignores: ["dist", "node_modules"],
  },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      "lit/attribute-names": [
        "error",
        {
          convention: "kebab",
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  litConfigs["flat/recommended"],
];
