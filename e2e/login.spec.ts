import { test, expect } from '@playwright/test';

test('test login | standard user', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/login');
  await page.getByRole('textbox', { name: 'Enter username' }).fill('pythonista');
  await page.getByRole('textbox', { name: 'Enter password'}).fill('I<3testing');
  await page.getByTestId('login-button').click();
  await expect(page.getByText('Reminders for pythonista')).toBeVisible();
});
