import { newE2EPage } from '@stencil/core/testing';

describe('web-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-button></web-button>');

    const element = await page.find('web-button');
    expect(element).toHaveClass('hydrated');
  });
});
