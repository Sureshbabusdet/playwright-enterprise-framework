// src/pages/AccountCreatedPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class AccountCreatedPage extends BasePage {
  readonly successMsg;
  readonly continueBtn;

  constructor(page: Page) {
    super(page);

    this.successMsg = page.locator('h2:has-text("Account Created!")');
    this.continueBtn = page.locator('a:has-text("Continue")');
  }

  async clickContinue() {
    await this.continueBtn.click();
  }
}