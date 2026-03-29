import { Page,expect, Locator } from '@playwright/test';
import { Logger } from './logger';
import { test} from "../fixtures/baseFixture";
export class Assertions {
 constructor(private page: Page) {}
 // Why Static method - Because - we needs to create a object for this assertions. 
 

  static async verifyText(locator: Locator, expected: string) {
  //  await expect(locator).toHaveText(expected);
      Logger.info(`Verifying text. Expected: "${expected}"`);
    try {
  await expect(locator).toHaveText(expected);
   Logger.info(`✅ Text verification passed: "${expected}"`);
} catch(error: any) {
     Logger.error(`❌ Text verification FAILED`);
      Logger.error(`Expected: "${expected}"`);
      Logger.error(`Error: ${error.message}`);
  throw new Error(`Text mismatch. Expected: ${expected}`);
}
  }


  static async verifyVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  static async verifyContainsText(locator: Locator, expected: string) {
    await expect(locator).toContainText(expected);
  }

  static async verifyStatus(code: number, expected: number) {
    expect(code).toBe(expected);
  }

  static async verifyTruthy(value: boolean) {
    expect(value).toBeTruthy();
  }

static async verifyHomePageLoaded(page: Page) {
  await expect(page).toHaveURL(/automationexercise/);
}

  

/*   static async verifyCartCount(expected: number) {
    const count = await this.cartPage.getCartCount();
    expect(count).toBe(expected);
  } */

  
}