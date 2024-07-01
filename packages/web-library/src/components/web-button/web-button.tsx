import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'web-button',
  styleUrl: 'web-button.scss',
  shadow: true,
})
export class WebButton {
  render() {
    return (
      <Host>
        <button class="button primary">
          <slot>Test me</slot>
        </button>
      </Host>
    );
  }
}
