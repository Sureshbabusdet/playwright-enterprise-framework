import { test, expect } from '../../src/fixtures/baseFixture';
import { LoginPage } from '../../src/pages/LoginPage';
import { HeaderComponent } from '../../src/components/HeaderComponent';
import { Assertions } from '../../src/utils/assertions';
import { Logger } from '../../src/utils/logger';
import { Tags  } from '../../src/tags/tags';
import { ENV } from '../../src/config/env';

test.describe('Login Test Suite',{tag:[Tags.Smoke,Tags.Regression]}, () => {

  // ✅ 1. Valid Login Test
  test('✅ Valid Login',{tag:[Tags.Smoke,Tags.Regression]}, async ({ loginPage,headerComponent }) => {

    Logger.info('Starting valid login test');

    await loginPage.navigate(ENV.BASE_URL);
    await headerComponent.goToLoginSignup();
    await loginPage.login(ENV.EMAIL, ENV.PASSWORD);

    // Verify user logged in
   /*  await Assertions.verifyText(loginPage.loginMessage,'Logged in as',); */
      Logger.info('Valid login test completed');
  });

  // ❌ 2. Invalid Login Test
  test('❌ Invalid Login',{tag :[Tags.Regression]}, async ({ loginPage,headerComponent}) => {
    Logger.info('Starting invalid login test');
    await loginPage.navigate(ENV.BASE_URL);
    await headerComponent.goToLoginSignup();
    await loginPage.login('wrong@test.com', 'wrong123');
    await Assertions.verifyText(loginPage.errorMessage,'Your email or password is incorrect!');
    Logger.info('Invalid login test completed');
  });

  // 🔄 3. Logout Flow
  test('🔄 Logout Test' ,{tag:[Tags.Smoke,Tags.Regression]}, async ({ loginPage,headerComponent }) => {
    Logger.info('Starting logout test');

    await loginPage.navigate(ENV.BASE_URL);
    await headerComponent.goToLoginSignup();
     await loginPage.login(ENV.EMAIL, ENV.PASSWORD);
    await headerComponent.logout();
    // Verify user redirected to login page
    await loginPage.verifyLoginPage();
    Logger.info('Logout test completed');
  });

});