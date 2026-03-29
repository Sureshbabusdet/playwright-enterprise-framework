/* * `env.ts` → Loads environment variables
 */

import * as dotenv from "dotenv";
dotenv.config({
    path:`.env.${process.env.TEST_ENV || 'qa' }`
})

/* 
! tells TypeScript:
“I am 100% sure this value exists”
TypeScript removes undefined from the type */

/* 
Pros
Cleaner type safety
Forces correct environment setup
Fails fast if missing */

export const ENV={
BASE_URL:process.env.BASE_URL!,
API_BASE_URL:process.env.API_BASE_URL!,
HEADLESS: process.env.HEADLESS === 'true',
BROWSER: process.env.BROWSER || 'chromium',
EMAIL:process.env.EMAIL!,
PASSWORD:process.env.PASSWORD!
}

/* Other Way to reduce the 
✔ Compile-time safety
✔ Runtime validation
✔ Clear error message
✔ Enterprise-ready */

/* function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env variable: ${name}`);
  }
  return value;
}

export const ENV = {
  BASE_URL: requiredEnv('BASE_URL')
}; */