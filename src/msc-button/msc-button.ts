import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('msc-button')
export class MSCButton extends LitElement {
  /**
   * Sets the overall style of button.
   * There are no restrictions on the style of the button based on the element it generates.
   */
  @property({ type: Number }) variant?: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property() camelCaseName = "";

  render() {
    return html`
      <button class=${this.variant}>
        <slot name="icon-before"></slot>
        <span class="label">
          <slot></slot>
        </span>
        <slot name="icon-after"></slot>
        <slot name="icon-only"></slot>
      </button>
    `
  }

  static styles = css`
    :host {
      display: inline-block;
      width: fit-content;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'msc-button': MSCButton
  }
}
