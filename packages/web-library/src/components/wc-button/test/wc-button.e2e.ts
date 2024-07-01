import { newE2EPage } from '@stencil/core/testing';

describe('wc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-button></wc-button>');

    const element = await page.find('wc-button');
    expect(element).toHaveClass('hydrated');
  });
});
