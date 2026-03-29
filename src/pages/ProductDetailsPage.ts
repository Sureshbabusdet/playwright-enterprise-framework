// src/pages/ProductDetailsPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class ProductDetailsPage extends BasePage {
  readonly productName;
  readonly price;
  readonly addToCartBtn;

  constructor(page: Page) {
    super(page);
    this.productName = page.locator('.product-information h2');
    this.price = page.locator('.product-information span span');
    this.addToCartBtn = page.locator('button:has-text("Add to cart")');
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}