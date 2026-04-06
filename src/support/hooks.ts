import { Before, After } from '@cucumber/cucumber';
import { launchBrowser, closeBrowser } from './playwright';

Before(async () => {
  console.log('Launching browser before scenario');
  await launchBrowser(); // Launch browser before the scenario
});

After(async () => {
  console.log('Closing browser after scenario');
  await closeBrowser(); // Close browser after the scenario
});
