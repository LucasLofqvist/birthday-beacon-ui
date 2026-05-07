import js from "@eslint/js";
import vue from "eslint-plugin-vue";

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],

  {
    rules: {
      // I let the Prettier extension handle most of the formatting.
      "no-unused-vars": "warn",
      "vue/multi-word-component-names": "off",
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/html-self-closing": "off",
      "vue/v-bind-style": "off",
      "vue/html-indent": "off",
    },
  },
];
