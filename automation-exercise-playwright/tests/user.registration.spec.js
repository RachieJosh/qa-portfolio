// @ts-check
import { test, expect } from '@playwright/test';
 
//To test user registration is successful
test('User Registration - Successful signup', async ({ page }) => {

//To generate a unique email
const uniqueEmail = `testuser_${Date.now()}@mail.com`;

//Navigating to the automation exercise website
await page.goto('https://automationexercise.com');

// Accept cookie consent
  const consentButton = page.getByRole('button', { name: 'Consent' });
  if (await consentButton.isVisible()) {
    await consentButton.click();
  }

// Proceed to signup without waiting for overlay
await page.getByRole('link', { name: 'Signup / Login' }).click();

//To fill the name field
await page.getByPlaceholder('Name').fill('Test User');

//To fill the email field
await page.locator('input[data-qa="signup-email"]').fill(uniqueEmail);

//To click the signup button
await page.getByRole('button', {name: 'Signup'}).click();

//Assertion
await expect(page.getByText('Enter Account Information')).toBeVisible();
});