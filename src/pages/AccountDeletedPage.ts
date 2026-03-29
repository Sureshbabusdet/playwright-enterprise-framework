// src/pages/AccountDeletedPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class AccountDeletedPage extends BasePage {
  readonly deletedMsg;
  readonly continueBtn;

  constructor(page: Page) {
    super(page);

    this.deletedMsg = page.locator('h2:has-text("Account Deleted!")');
    this.continueBtn = page.locator('a:has-text("Continue")');
  }

  async clickContinue() {
    await this.continueBtn.click();
  }
}