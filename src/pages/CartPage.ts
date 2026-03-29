// src/pages/CartPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class CartPage extends BasePage {
  readonly cartItems;
  readonly checkoutBtn;

  constructor(page: Page) {
    super(page);
    this.cartItems = page.locator('.cart_info tbody tr');
    this.checkoutBtn = page.locator('a:has-text("Proceed To Checkout")');
  }

  async getCartCount() {
    return this.cartItems.count();
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
}