import { Page, Locator,expect } from '@playwright/test';
import { BasePage } from './base/BasePage';
import { ENV } from '../config/env';

export class LoginPage extends BasePage {

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly logoutBtn: Locator;
  readonly errorMessage:Locator;
  readonly loginMessage:Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginBtn = page.locator('button[data-qa="login-button"]');
    this.logoutBtn = page.locator('a[href="/logout"]');
   this.errorMessage = page.locator('p:has-text("Your email or password is incorrect!")');
   this.loginMessage=page.locator('a:has-text("Logged in as")');
  }


  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async isLoggedIn() {
    return this.logoutBtn.isVisible();
  }
  async verifyLoginPage() {
  await expect(this.page).toHaveURL(/login/);
}

}