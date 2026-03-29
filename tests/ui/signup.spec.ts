import { test } from '../../src/fixtures/baseFixture';
import { AccountCreatedPage } from '../../src/pages/AccountCreatedPage';


test.describe('@regression @signup', () => {

  test('User Registration', async ({ signupPage, page }) => {
    /* const user = userBuilder.build(); */
    const accountCreated = new AccountCreatedPage(page);

    await signupPage.navigate('/login');
    await signupPage.startSignup('suresh', 'sureshbabucsit@gmail.com');
    await signupPage.completeRegistration('suresh');
    await accountCreated.clickContinue();

 
  });

});