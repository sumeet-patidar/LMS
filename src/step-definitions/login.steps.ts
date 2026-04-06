import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/playwright';

Given('I am on the login page', async () => {
  await page.goto('https://example.com/login');
});

When('I fill in the login form with valid credentials', async () => {
  await page.fill('#username', 'validUser');
  await page.fill('#password', 'validPassword');
});

When('I click the login button', async () => {
  await page.click('#login-button');
});

Then('I should see the dashboard', async () => {
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Dashboard');
});
