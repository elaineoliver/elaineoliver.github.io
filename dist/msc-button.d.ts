import { LitElement } from 'lit';
export declare class MSCButton extends LitElement {
    #private;
    constructor();
    static readonly formAssociated = true;
    static shadowRootOptions: ShadowRootInit;
    type?: "button" | "reset" | "submit";
    variant?: "primary" | "secondary";
    private getForm;
    componentDidLoad(): void;
    render(): import('lit-html').TemplateResult<1>;
    private doFormStuff;
    static styles: import('lit').CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "msc-button": MSCButton;
    }
}
