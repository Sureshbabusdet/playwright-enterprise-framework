import { test } from '../../src/fixtures/baseFixture';

test.describe('@regression @checkout', () => {

  test('@flaky Complete Checkout Flow', async ({
    productsPage,
    cartPage,
    checkoutPage,
    paymentPage,
/*     mockCart */
  }) => {

    await productsPage.navigate('/products');

    const product = productsPage.getProductCard(0);
    await product.addToCart();

    await cartPage.navigate('/view_cart');
    await cartPage.proceedToCheckout();

    await checkoutPage.placeOrder();

    await paymentPage.pay({
      name: 'Test User',
      card: '4111111111111111',
      cvc: '123',
      expiry: '12/30'
    });
  });

});