import { test } from '@playwright/test';
import { Logger } from '../utils/logger';

test.beforeEach(async ({}, testInfo) => {
  Logger.info(`Starting Test: ${testInfo.title}`);
});

test.afterEach(async ({}, testInfo) => {
  Logger.info(`Finished Test: ${testInfo.title} - Status: ${testInfo.status}`);
});