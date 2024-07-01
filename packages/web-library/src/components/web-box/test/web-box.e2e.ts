import { newE2EPage } from '@stencil/core/testing';

describe('web-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-box></web-box>');

    const element = await page.find('web-box');
    expect(element).toHaveClass('hydrated');
  });
});
