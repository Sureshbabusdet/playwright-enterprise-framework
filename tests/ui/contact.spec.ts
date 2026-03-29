import { test, expect } from '../../src/fixtures/baseFixture';

test.describe('@regression @contact', () => {

  test('Submit Contact Form', async ({ contactUsPage }) => {


    await contactUsPage.navigate('/contact_us');

    await contactUsPage.submitForm({
      name: "suresh",
      email: "sureshbabucsit@gmail.com",
      subject: 'Test Subject',
      message: 'Test Message'
    }, 'tests/test-data/sample.txt');

  });

});