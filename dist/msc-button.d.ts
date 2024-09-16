import { LitElement } from 'lit';
export declare class MSCButton extends LitElement {
    static readonly formAssociated = true;
    static shadowRootOptions: ShadowRootInit;
    /**
     * Sets the overall style of button.
     * There are no restrictions on the style of the button based on the element it generates.
     */
    variant?: 'primary' | 'secondary';
    render(): import('lit-html').TemplateResult<1>;
    static styles: import('lit').CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'msc-button': MSCButton;
    }
}
