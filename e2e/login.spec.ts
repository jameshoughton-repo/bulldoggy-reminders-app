import { test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

// test data 
const validUsername = 'pythonista'; 
const validPassword = 'I<3testing';
const invalidUsername = 'test';
const invalidPassword = 'test';

// test setup
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
}) 

// login with standard user account 
test('test login | standard user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.inputUsername(validUsername);
  await loginPage.inputPassword(validPassword);
  await loginPage.clickLogin();
  await loginPage.assertValidLogin();
});

// login with invalid account details 
test('test login | invalid user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.inputUsername(invalidUsername);
  await loginPage.inputPassword(invalidPassword);
  await loginPage.clickLogin();
  await loginPage.assertInvalidLogin();
});
