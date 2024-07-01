import { Plugin } from 'vue';
import { defineCustomElements } from 'web-library/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};