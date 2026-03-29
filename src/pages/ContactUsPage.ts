// src/pages/ContactUsPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class ContactUsPage extends BasePage {
  readonly name;
  readonly email;
  readonly subject;
  readonly message;
  readonly uploadFile;
  readonly submitBtn;
  readonly successMsg;

  constructor(page: Page) {
    super(page);

    this.name = page.locator('[data-qa="name"]');
    this.email = page.locator('[data-qa="email"]');
    this.subject = page.locator('[data-qa="subject"]');
    this.message = page.locator('#message');
    this.uploadFile = page.locator('input[type="file"]');
    this.submitBtn = page.locator('[data-qa="submit-button"]');
    this.successMsg = page.locator('.status');
  }

  async submitForm(data: any, filePath: string) {
    await this.name.fill(data.name);
    await this.email.fill(data.email);
    await this.subject.fill(data.subject);
    await this.message.fill(data.message);

    await this.uploadFile.setInputFiles(filePath);

    this.page.once('dialog', async (dialog) => {
      await dialog.accept(); // handle alert
    });

    await this.submitBtn.click();
  }
}