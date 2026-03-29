// src/fixtures/testFixtures.ts
import { test as base, expect } from '@playwright/test';

// Pages
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';
import { ContactUsPage } from '../pages/ContactUsPage';
import { CategoryPage } from '../pages/CategoryPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

// Components
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { NavigationMenuComponent } from '../components/NavigationMenuComponent';
import { SubscriptionComponent } from '../components/SubscriptionComponent';

// API
import { APIClient } from '../api/APIClient';
/* import { UserAPI } from '../api/user.api'; */

// Assertions
import { Assertions } from '../utils/assertions';

// Builders
 import { UserBuilder } from '../builders/UserBuilder';
/*import { ProductBuilder } from '../builders/ProductBuilder';
 */
// Mocks
/* import { mockAddToCart } from '../mocks/cartMock'; */

type Fixtures = {
  // Pages
  homePage: HomePage;
  loginPage: LoginPage;
  signupPage: SignupPage;
  productsPage: ProductsPage;
  productDetailsPage: ProductDetailsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  paymentPage: PaymentPage;
  contactUsPage: ContactUsPage;
  categoryPage: CategoryPage;
  searchResultsPage: SearchResultsPage;
  userBuilder: UserBuilder;

  // Components
  headerComponent: HeaderComponent;
  footerComponent: FooterComponent;
  navMenuComponent: NavigationMenuComponent;
  subscriptionComponent: SubscriptionComponent;

  // API
  apiClient: APIClient;
 /* userApi: UserAPI; */
  // Assertions
  assertions: Assertions;
  /* cartAssertions: CartAssertions;
 */
  // Builders
  /* userBuilder: UserBuilder;
  productBuilder: ProductBuilder;
 */
  // Utilities
 /*  mockCart: void; */
};

export const test = base.extend<Fixtures>({

  // 🔹 Pages
  homePage: async ({ page }, use) => await use(new HomePage(page)),
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  signupPage: async ({ page }, use) => await use(new SignupPage(page)),
  productsPage: async ({ page }, use) => await use(new ProductsPage(page)),
  productDetailsPage: async ({ page }, use) => await use(new ProductDetailsPage(page)),
  cartPage: async ({ page }, use) => await use(new CartPage(page)),
  checkoutPage: async ({ page }, use) => await use(new CheckoutPage(page)),
  paymentPage: async ({ page }, use) => await use(new PaymentPage(page)),
  contactUsPage: async ({ page }, use) => await use(new ContactUsPage(page)),
  categoryPage: async ({ page }, use) => await use(new CategoryPage(page)),
  searchResultsPage: async ({ page }, use) => await use(new SearchResultsPage(page)),

  // 🔹 Components
  headerComponent: async ({ page }, use) => await use(new HeaderComponent(page)),
  footerComponent: async ({ page }, use) => await use(new FooterComponent(page)),
  navMenuComponent: async ({ page }, use) => await use(new NavigationMenuComponent(page)),
  subscriptionComponent: async ({ page }, use) => await use(new SubscriptionComponent(page)),

  // 🔹 API
  apiClient: async ({ request }, use) => {
    await use(new APIClient(request));
  },
 /*   userApi: async ({ apiClient }, use) => {
    await use(new UserAPI(apiClient));
  } */
   

  // 🔹 Assertions
 /*  assertions: async ({ page }, use) => {
    await use(new Assertions(page));
  }, */

 /*  cartAssertions: async ({ cartPage }, use) => {
    await use(new CartAssertions(cartPage));
  }, */

  // 🔹 Builders (fresh instance per test)
  userBuilder: async ({}, use) => {
    await use(new UserBuilder());
  }, 

/*   productBuilder: async ({}, use) => {
    await use(new ProductBuilder());
  }, */

  // 🔹 Mock (auto applied when used)
/*   mockCart: async ({ page }, use) => {
    await mockAddToCart(page);
    await use();
  } */

});

export { expect };