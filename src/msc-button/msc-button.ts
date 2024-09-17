import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("msc-button")
export class MSCButton extends LitElement {
  #internals;
  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.addEventListener('click', this.doFormStuff.bind(this));
  }

  static readonly formAssociated = true;

  static override shadowRootOptions: ShadowRootInit = {
    mode: "open",
    delegatesFocus: true,
  };

  @property({ type: String }) type?: "button" | "reset" | "submit" = "button";

  @property({ type: String }) variant?: "primary" | "secondary";

  private getForm() {
    return this.#internals.form
  }

  componentDidLoad() {
    this.getForm();
  }

  render() {
    return html`
      <button class=${this.variant || "primary"} type=${this.type || "button"}>
        <slot name="icon-before"></slot>
        <span class="label">
          <slot></slot>
        </span>
        <slot name="icon-after"></slot>
        <slot name="icon-only"></slot>
      </button>
    `;
  }

  private doFormStuff() {
    if (this.type === 'submit' || this.type === 'reset') {
      if (this.#internals.form !== null) {
        if (this.type === 'submit') {
          this.#internals.form.requestSubmit();
        } else if (this.type === 'reset') {
          this.#internals.form.reset();
        }
      } else {
        new Error(`MSC Button is type of "${this.type}", but a form can not be found.`);
      }
    }
  }

  static styles = css`
    :host {
      display: inline-block;
      width: fit-content;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    button {
      cursor: pointer;
      font: var(--msc-font-md);
      font-weight: bold;
    }

    button:focus-visible {
      outline: 2px solid var(--msc-color-interaction-focus);
      outline-offset: 2px;
    }

    button:focus-visible:hover {
      outline: none;
    }

    button:focus:not(:focus-visible) {
      outline: none;
    }

    .primary,
    .secondary {
      padding: 0 0.5lh;
      border-radius: 4px;
      line-height: 1.75lh;
    }

    .primary {
      border: 1px solid transparent;
      background: var(--msc-color-interaction);
      color: var(--msc-color-on-interaction);
    }

    .primary:hover,
    .primary:focus {
      border: 1px solid var(--msc-color-interaction-hover);
      background: var(--msc-color-interaction-hover);
    }

    .primary:active {
      border: 1px solid var(--msc-color-interaction);
      background: var(--msc-color-interaction);
    }

    .secondary {
      border: 1px solid var(--msc-color-interaction);
      background: var(--msc-color-on-interaction);
      color: var(--msc-color-interaction);
    }

    .secondary:hover,
    .secondary:focus {
      border: 1px solid var(--msc-color-interaction-hover);
      color: var(--msc-color-interaction-hover);
    }

    .secondary:active {
      border: 1px solid var(--msc-color-interaction);
      background: var(--msc-color-interaction);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "msc-button": MSCButton;
  }
}
