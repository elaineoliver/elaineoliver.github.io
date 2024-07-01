import { newSpecPage } from '@stencil/core/testing';
import { WebButton } from '../web-button';

describe('web-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebButton],
      html: `<web-button></web-button>`,
    });
    expect(page.root).toEqualHtml(`
      <web-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-button>
    `);
  });
});
