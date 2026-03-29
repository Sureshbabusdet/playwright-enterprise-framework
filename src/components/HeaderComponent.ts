import { BaseComponent } from './base/BaseComponent';
import {Page, expect, Locator } from '@playwright/test';

export class HeaderComponent extends BaseComponent {

  constructor(page:Page) {
    super(page, 'header'); // root of header
  }

  // 🔹 Locators
  private homeLink = 'a[href="/"]';
  private productsLink = 'a[href="/products"]';
  private cartLink = 'a[href="/view_cart"]';
  private signupLoginLink = 'a[href="/login"]';
  private logoutLink = 'a[href="/logout"]';
  private deleteAccountLink = 'a[href="/delete_account"]';
  private loggedInUser = 'a:has-text("Logged in as")';

  // 🔹 Actions

  async goToHome() {
    await this.click(this.homeLink);
  }

  async goToProducts() {
    await this.click(this.productsLink);
  }

  async goToCart() {
    await this.click(this.cartLink);
  }

  async goToLoginSignup() {
    await this.click(this.signupLoginLink);
  }

  async logout() {
    await this.click(this.logoutLink);
  }

  async deleteAccount() {
    await this.click(this.deleteAccountLink);
  }

  // 🔹 Validations

  async verifyUserLoggedIn(username: string) {
    await expect(this.locator(this.loggedInUser))
      .toContainText(username);
  }

  async isLogoutVisible(): Promise<boolean> {
    return await this.locator(this.logoutLink).isVisible();
  }

  async isLoginVisible(): Promise<boolean> {
    return await this.locator(this.signupLoginLink).isVisible();
  }
}