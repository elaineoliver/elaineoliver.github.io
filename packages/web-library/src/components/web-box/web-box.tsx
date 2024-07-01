import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'web-box',
  styleUrl: 'web-box.scss',
  shadow: true,
})
export class WebBox {
  @Prop() variant?: "primary" | "secondary" | "tertiary" = "primary"

  render() {
    return (
      <Host>
        <div class={`box ${this.variant}`}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
