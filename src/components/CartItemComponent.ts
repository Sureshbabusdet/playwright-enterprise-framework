// src/components/CartItemComponent.ts
import { Locator } from '@playwright/test';

export class CartItemComponent {
  constructor(private root: Locator) {}

  get productName() {
    return this.root.locator('.cart_description h4 a');
  }

  get price() {
    return this.root.locator('.cart_price p');
  }

  get quantity() {
    return this.root.locator('.cart_quantity button');
  }

  get totalPrice() {
    return this.root.locator('.cart_total p');
  }

  get deleteBtn() {
    return this.root.locator('.cart_delete a');
  }

  async removeItem() {
    await this.deleteBtn.click();
  }

  async getProductName() {
    return await this.productName.textContent();
  }
}