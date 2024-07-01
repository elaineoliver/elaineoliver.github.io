import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'wc-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: './lib/brand-a-tokens.css',
          dest: './global/brand-a-tokens.css',
          warn: true
        },
        {
          src: './lib/brand-b-tokens.css',
          dest: './global/brand-b-tokens.css',
          warn: true
        },
      ]
    },
    vueOutputTarget({
      componentCorePackage: 'wc-library',
      proxiesFile: '../vue-library/lib/components.ts',
      includePolyfills: false,
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/lib/css-mixins.scss'
      ]
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
