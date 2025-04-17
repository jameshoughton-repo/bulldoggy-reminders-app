import { test } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { RemindersPage } from './pages/reminder-page';

// test data 
const validUsername = 'pythonista'; 
const validPassword = 'I<3testing';

// test setup
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.inputUsername(validUsername);
  await loginPage.inputPassword(validPassword);
  await loginPage.clickLogin();
  await loginPage.assertValidLogin();
}) 

// adding a new list
test('add a new list', async ({ page }) => {
    const remdinderPage = new RemindersPage(page);
    await remdinderPage.newlist();

});

// adding new list item 
