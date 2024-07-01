import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'web-button',
  styleUrl: 'web-button.scss',
  shadow: true,
})
export class WebButton {
  @Prop() variant?: "primary" | "on-primary" | "secondary" | "on-secondary" = "primary"

  @Prop() options?: "solid" | "outline" = "solid"

  render() {
    return (
      <Host>
        <button class={`button ${this.variant} ${this.options}`}>
          <span class="label">
            <slot>Test me</slot>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="currentColor" d="M11.293 9l-5.647 5.646a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708l-6-6a.5.5 0 1 0-.708.708L11.293 9z"></path></svg>
        </button>
      </Host>
    );
  }
}
