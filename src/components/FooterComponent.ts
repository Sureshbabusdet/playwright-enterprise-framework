// src/components/FooterComponent.ts
import { Page, Locator } from '@playwright/test';

export class FooterComponent {
  readonly subscriptionText: Locator;
  readonly emailInput: Locator;
  readonly subscribeBtn: Locator;
  readonly successMsg: Locator;

  constructor(private page: Page) {
    this.subscriptionText = page.locator('footer h2');
    this.emailInput = page.locator('#susbscribe_email');
    this.subscribeBtn = page.locator('#subscribe');
    this.successMsg = page.locator('#success-subscribe');
  }

  async subscribe(email: string) {
    await this.emailInput.fill(email);
    await this.subscribeBtn.click();
  }
}