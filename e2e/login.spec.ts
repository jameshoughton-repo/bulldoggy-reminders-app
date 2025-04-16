import { test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

// test setup
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
}) 

// login with standard user account 
test('test login | standard user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.inputUsername('pythonista');
  await loginPage.inputPassword('I<3testing');
  await loginPage.clickLogin();
});

// login with invalid account details 
test('test login | invalid user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.inputUsername('invalidUser');
  await loginPage.inputPassword('invalidPassword');
  await loginPage.clickLogin();
  await loginPage.assertInvalidLogin();
});
