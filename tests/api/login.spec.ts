import { test, expect } from '../../src/fixtures/baseFixture';
import { ENV } from '../../src/config/env';
import { Tags } from '../../src/tags/tags';

import { API } from '../../src/api/endpoints';
import { APIClient } from '../../src/api/APIClient';

test.describe('', () => {

  test('API Login', async ({ apiClient }) => {
const response = await apiClient.post(
    API.VERIFY_LOGIN,
    {
      email: ENV.EMAIL,
      password: ENV.PASSWORD
    },
    {},
    true // ✅ form-data flag
  );

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('responseCode');
  });


 test('Get Account Details by Email',{tag:[Tags.Smoke]},async({apiClient})=> {

    

 }); 


});