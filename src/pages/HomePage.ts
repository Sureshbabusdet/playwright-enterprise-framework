// src/pages/HomePage.ts
import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';
import { HeaderComponent } from '../components/HeaderComponent';
import { SubscriptionComponent } from '../components/SubscriptionComponent';

export class HomePage extends BasePage {
  readonly header: HeaderComponent;
  readonly subscription: SubscriptionComponent;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.subscription = new SubscriptionComponent(page);
  }

  async isHomePageVisible() {
    return this.page.locator('img[alt="Website for automation practice"]').isVisible();
  }
}