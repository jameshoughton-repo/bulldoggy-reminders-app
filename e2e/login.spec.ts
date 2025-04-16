import { test, expect } from '@playwright/test';

// login with standard user account 
test('test login | standard user', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/login');
  await page.getByRole('textbox', { name: 'Enter username' }).fill('pythonista');
  await page.getByRole('textbox', { name: 'Enter password'}).fill('I<3testing');
  await page.getByTestId('login-button').click();
  await expect(page.getByText('Reminders for pythonista')).toBeVisible();
});

// login with invalid account details 
test('test login | invalid user', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/login');
  await page.getByRole('textbox', { name: 'Enter username' }).fill('test');
  await page.getByRole('textbox', { name: 'Enter password'}).fill('test');
  await page.getByTestId('login-button').click();
});

// login page validation
test('test login | field validation', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/login');
  await page.getByTestId('login-button').click();
});
