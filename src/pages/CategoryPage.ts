// src/pages/CategoryPage.ts
import { Page, Locator } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class CategoryPage extends BasePage {
  readonly categoryList: Locator;
  readonly subCategoryList: Locator;
  readonly products: Locator;

  constructor(page: Page) {
    super(page);

    this.categoryList = page.locator('.category-products');
    this.subCategoryList = page.locator('.panel-body a');
    this.products = page.locator('.product-image-wrapper');
  }

  async selectCategory(categoryName: string) {
    await this.page.locator(`a:has-text("${categoryName}")`).click();
  }

  async selectSubCategory(subCategory: string) {
    await this.page.locator(`a:has-text("${subCategory}")`).click();
  }

  async getProductsCount() {
    return this.products.count();
  }
}