import { defineContainer } from './vue-component-lib/utils';
export const MyComponent = defineContainer('my-component', undefined, [
    'first',
    'middle',
    'last'
]);
export const WebBox = defineContainer('web-box', undefined, [
    'variant'
]);
export const WebButton = defineContainer('web-button', undefined, [
    'variant',
    'options'
]);
export const WebMfe = defineContainer('web-mfe', undefined);
//# sourceMappingURL=components.js.map