import { Page, Locator, expect } from '@playwright/test';
import { ENV } from '../../config/env';

export class BasePage {

     protected page: Page;

  constructor(page: Page) {
   this.page=page;
  }

   async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async click(locator: string): Promise<void> {
    await this.page.click(locator);
  }

  async fill(locator: string, value: string): Promise<void> {
    await this.page.fill(locator, value);
  }

  async getText(locator: string): Promise<string> {
    return await this.page.textContent(locator) || '';
  }

  ////////////////Verification /////////////

   async getTitle(): Promise<string> {
    return this.page.title();
  }

  


}