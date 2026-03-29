// tests/ui/cart.spec.ts
import { test } from '../../src/fixtures/baseFixture';
import { Assertions } from '../../src/utils/assertions';


test('@smoke @cart', async ({
  productsPage,
  navMenuComponent,

}) => {

  await productsPage.navigate('/products');

  const product = productsPage.getProductCard(0);
  await product.addToCart();

  await navMenuComponent.navigateToCart();

 // await Assertions.verifyCartCount(1);
});