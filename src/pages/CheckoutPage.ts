// src/pages/CheckoutPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class CheckoutPage extends BasePage {
  readonly placeOrderBtn;

  constructor(page: Page) {
    super(page);
    this.placeOrderBtn = page.locator('a:has-text("Place Order")');
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }
}