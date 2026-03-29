import { test, expect } from '../../src/fixtures/baseFixture';
import { API } from '../../src/api/endpoints';



test.describe('@api @products', () => {

  test('Get Products List', async ({ apiClient }) => {

    const response = await apiClient.get(API.GET_PRODUCTS_LIST);

    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data.products.length).toBeGreaterThan(0);
  });

 

});