import { test, expect } from '../../src/fixtures/baseFixture';



test.describe('@regression @category', () => {

  test('Navigate Category', async ({ categoryPage }) => {

    await categoryPage.navigate('/products');

    await categoryPage.selectCategory('Women');
    await categoryPage.selectSubCategory('Dress');

    const count = await categoryPage.getProductsCount();
    expect(count).toBeGreaterThan(0);
  });

});