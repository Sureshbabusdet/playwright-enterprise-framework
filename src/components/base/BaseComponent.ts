import { Page, Locator } from '@playwright/test';

export class BaseComponent {
  protected page: Page;
  protected root: Locator;

  constructor(page: Page, rootSelector: string) {
    this.page = page;
    this.root = page.locator(rootSelector);
  }

  protected locator(selector: string): Locator {
    return this.root.locator(selector);
  }

  async click(selector: string) {
    await this.locator(selector).click();
  }

  async getText(selector: string) {
    return await this.locator(selector).innerText();
  }
}
