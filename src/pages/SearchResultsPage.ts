// src/pages/SearchResultsPage.ts
import { Page, Locator } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class SearchResultsPage extends BasePage {
  readonly results: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    super(page);

    this.results = page.locator('.features_items');
    this.productNames = page.locator('.productinfo p');
  }

  async getResultsCount() {
    return this.productNames.count();
  }

  async getAllProductNames() {
    return this.productNames.allTextContents();
  }
}