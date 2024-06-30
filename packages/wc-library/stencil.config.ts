import { Config } from '@stencil/core';

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
    },
    vueOutputTarget({
      componentCorePackage: 'wc-library',
      proxiesFile: '../vue-library/lib/components.ts',
      includePolyfills: false,
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
