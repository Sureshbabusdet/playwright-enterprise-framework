// src/components/ModalComponent.ts
import { Page, Locator } from '@playwright/test';

export class ModalComponent {
  readonly continueShoppingBtn: Locator;
  readonly viewCartBtn: Locator;

  constructor(private page: Page) {
    this.continueShoppingBtn = page.locator('button:has-text("Continue Shopping")');
    this.viewCartBtn = page.locator('a:has-text("View Cart")');
  }

  async clickContinue() {
    await this.continueShoppingBtn.click();
  }

  async clickViewCart() {
    await this.viewCartBtn.click();
  }
}