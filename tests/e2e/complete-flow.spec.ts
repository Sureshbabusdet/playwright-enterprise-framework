import { test ,expect} from '../../src/fixtures/baseFixture';
import { AccountCreatedPage } from '../../src/pages/AccountCreatedPage';
import { Assertions } from '../../src/utils/assertions';
import { ENV } from '../../src/config/env';
import { Tags } from '../../src/tags/tags';
test.describe.serial('@e2e @regression @checkout-flow',{tag:[Tags.E2E]}, () => {

  test('Complete User Journey',{tag:[Tags.E2E]}, async ({

    page,
    navMenuComponent,
    signupPage,
    loginPage,
    productsPage,
    cartPage,
    checkoutPage,
    paymentPage,
    userBuilder
  }) => {

   // 🧾 1. Generate dynamic user
    const user = userBuilder.build();


    // 🌐 2. Navigate to Home
    await loginPage.navigate(ENV.BASE_URL);
    await Assertions.verifyHomePageLoaded(page);

    // 🔐 3. Go to Signup/Login
    await navMenuComponent.navigateToLogin();

    // 📝 4. Signup
    await signupPage.startSignup(user.name,user.email);
    await signupPage.completeRegistration(user);

    const accountCreated = new AccountCreatedPage(page);
    await accountCreated.clickContinue();

    // 🛍️ 5. Navigate to Products
    await navMenuComponent.navigateToProducts();

    // ➕ 6. Add Product to Cart
    const product = productsPage.getProductCard(0);
    await product.addToCart();

    // 🛒 7. Go to Cart
    await navMenuComponent.navigateToCart();

    const cartCount = await cartPage.getCartCount();
    expect(cartCount).toBeGreaterThan(0);

    // 💳 8. Proceed to Checkout
    await cartPage.proceedToCheckout();

    // 📦 9. Place Order
    await checkoutPage.placeOrder();

    // 💰 10. Payment
    await paymentPage.pay({
      name: user.name,
      card: '4111111111111111',
      cvc: '123',
      expiry: '12/30'
    });

    // ✅ 11. Verify Success
    await expect(
      page.locator('text=Order Placed!')
    ).toBeVisible();

    // 🚪 12. Logout
    await navMenuComponent.navigateToLogout?.(); // optional if implemented
  });

});