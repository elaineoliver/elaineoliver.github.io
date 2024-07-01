import { newSpecPage } from '@stencil/core/testing';
import { WebBox } from '../web-box';

describe('web-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebBox],
      html: `<web-box></web-box>`,
    });
    expect(page.root).toEqualHtml(`
      <web-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-box>
    `);
  });
});
