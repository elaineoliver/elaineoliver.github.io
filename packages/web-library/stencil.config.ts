import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'web-library',
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
          src: './lib/brand-a-tokens.css',
          dest: '../react-test-app/src/brand-a-tokens.css',
          warn: true
        },
        {
          src: './lib/brand-a-tokens.css',
          dest: '../vue-test-app/src/brand-a-tokens.css',
          warn: true
        },
        {
          src: './lib/brand-b-tokens.css',
          dest: './global/brand-b-tokens.css',
          warn: true
        },
        {
          src: './lib/brand-b-tokens.css',
          dest: '../react-test-app/src/brand-b-tokens.css',
          warn: true
        },
        {
          src: './lib/brand-b-tokens.css',
          dest: '../vue-test-app/src/brand-b-tokens.css',
          warn: true
        },
      ]
    },
    reactOutputTarget({
      componentCorePackage: 'web-library',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: 'web-library',
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
