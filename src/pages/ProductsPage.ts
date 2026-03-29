// src/pages/ProductsPage.ts
import { Page, Locator } from '@playwright/test';
import { BasePage } from './base/BasePage';
import { ProductCardComponent } from '../components/ProductCardComponent';

export class ProductsPage extends BasePage {
  readonly searchInput: Locator;
  readonly searchBtn: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator('#search_product');
    this.searchBtn = page.locator('#submit_search');
    this.productCards = page.locator('.product-image-wrapper');
  }

  getProductCard(index: number): ProductCardComponent {
    return new ProductCardComponent(this.productCards.nth(index));
  }

  async searchProduct(name: string) {
    await this.searchInput.fill(name);
    await this.searchBtn.click();
  }
}