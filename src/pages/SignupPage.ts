// src/pages/SignupPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class SignupPage extends BasePage {
  readonly nameInput;
  readonly emailInput;
  readonly signupBtn;

  // Registration form
  readonly password;
  readonly firstName;
  readonly lastName;
  readonly address;
  readonly state;
  readonly city;
  readonly zipcode;
  readonly mobile;
  readonly createAccountBtn;

  constructor(page: Page) {
    super(page);

    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.signupBtn = page.locator('button[data-qa="signup-button"]');

    this.password = page.locator('#password');
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.address = page.locator('#address1');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobile = page.locator('#mobile_number');
    this.createAccountBtn = page.locator('button[data-qa="create-account"]');
  }

  async startSignup(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupBtn.click();
  }

  async completeRegistration(user: any) {
    await this.password.fill(user.password);
    await this.firstName.fill(user.name);
    await this.lastName.fill('Test');
    await this.address.fill('Test Address');
    await this.state.fill('State');
    await this.city.fill('City');
    await this.zipcode.fill('123456');
    await this.mobile.fill('9999999999');

    await this.createAccountBtn.click();
  }
}