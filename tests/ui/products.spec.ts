import { test, expect } from '../../src/fixtures/baseFixture';


test.describe('@regression @products', () => {

  test('Search Product', async ({ productsPage, searchResultsPage }) => {
    await productsPage.navigate('/products');
    await productsPage.searchProduct('Blue Top');

    const count = await searchResultsPage.getResultsCount();
    expect(count).toBeGreaterThan(0);
  });

});