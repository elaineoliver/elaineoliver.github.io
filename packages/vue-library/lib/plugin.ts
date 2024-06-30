import { Plugin } from 'vue';
import { defineCustomElements } from 'wc-library/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};