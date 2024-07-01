import { newSpecPage } from '@stencil/core/testing';
import { WcButton } from '../wc-button';

describe('wc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcButton],
      html: `<wc-button></wc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-button>
    `);
  });
});
