// src/components/ProductCardComponent.ts
import { Locator } from '@playwright/test';
import { BaseComponent } from './base/BaseComponent';

export class ProductCardComponent {
  constructor(private root: Locator) {


  }
  
  async addToCart() {
    await this.root.locator('text=Add to cart').click();
  }

  async viewProduct() {
    await this.root.locator('text=View Product').click();
  }

  async getProductName() {
    return this.root.locator('.productinfo p').textContent();
  }

  async getPrice() {
    return this.root.locator('.productinfo h2').textContent();
  }
}