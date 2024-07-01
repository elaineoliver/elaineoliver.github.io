import { newE2EPage } from '@stencil/core/testing';

describe('web-mfe', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-mfe></web-mfe>');

    const element = await page.find('web-mfe');
    expect(element).toHaveClass('hydrated');
  });
});
