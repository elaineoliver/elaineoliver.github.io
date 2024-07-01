import { newSpecPage } from '@stencil/core/testing';
import { WebMfe } from '../web-mfe';

describe('web-mfe', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebMfe],
      html: `<web-mfe></web-mfe>`,
    });
    expect(page.root).toEqualHtml(`
      <web-mfe>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-mfe>
    `);
  });
});
