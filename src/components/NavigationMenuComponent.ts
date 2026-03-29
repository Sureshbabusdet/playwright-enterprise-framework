// src/components/NavigationMenuComponent.ts
import { Page, Locator } from '@playwright/test';

export class NavigationMenuComponent {
  readonly home: Locator;
  readonly products: Locator;
  readonly cart: Locator;
  readonly login: Locator;
  readonly logout: Locator;
  readonly contactUs: Locator;
  readonly testCases: Locator;

  constructor(private page: Page) {
    this.home = page.locator('a[href="/"]');
    this.products = page.locator('a[href="/products"]');
    this.cart = page.locator('a[href="/view_cart"]');
    this.login = page.locator('a[href="/login"]');
    this.logout = page.locator('a[href="/logout"]');
    this.contactUs = page.locator('a[href="/contact_us"]');
    this.testCases = page.locator('a[href="/test_cases"]');
  }

  async navigateToHome() {
    await this.home.click();
  }

  async navigateToProducts() {
    await this.products.click();
  }

  async navigateToCart() {
    await this.cart.click();
  }

  async navigateToLogin() {
    await this.login.click();
  }

   async navigateToContact() {
    await this.contactUs.click();
  }

  async navigateToLogout() {
    await this.logout.click();
  }

}