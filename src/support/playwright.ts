import { chromium, Browser, Page } from '@playwright/test';

let browser: Browser;
let page: Page;

async function launchBrowser() {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  return page;
}

async function closeBrowser() {
  await browser.close();
}

export { page, launchBrowser, closeBrowser };
