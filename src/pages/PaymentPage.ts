// src/pages/PaymentPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class PaymentPage extends BasePage {
  readonly nameOnCard;
  readonly cardNumber;
  readonly cvc;
  readonly expiry;
  readonly payBtn;

  constructor(page: Page) {
    super(page);
    this.nameOnCard = page.locator('input[name="name_on_card"]');
    this.cardNumber = page.locator('input[name="card_number"]');
    this.cvc = page.locator('input[name="cvc"]');
    this.expiry = page.locator('input[name="expiry"]');
    this.payBtn = page.locator('#submit');
  }

  async pay(details: any) {
    await this.nameOnCard.fill(details.name);
    await this.cardNumber.fill(details.card);
    await this.cvc.fill(details.cvc);
    await this.expiry.fill(details.expiry);
    await this.payBtn.click();
  }
}