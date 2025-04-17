import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly enterUsername: Locator;
  readonly enterPassword: Locator;
  readonly loginButton: Locator;
  readonly loginMessage: Locator;
  readonly logoutButton: Locator;
  readonly logoutMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterUsername = page.getByRole('textbox', { name: 'Enter username' });
    this.enterPassword = page.getByRole('textbox', { name: 'Enter password'});
    this.loginButton = page.getByTestId('login-button');
    this.loginMessage = page.getByText('Invalid login! Please retry.');
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.logoutMessage = page.getByText('Successfully logged out.');
  }

  async goto() {
    await this.page.goto('http://127.0.0.1:8000/login');
  }

  async inputUsername(text: string) {
    await this.enterUsername.fill(text);
  }

  async inputPassword(text: string) {
    await this.enterPassword.fill(text);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }

  async assertInvalidLogin() {
    await expect(this.loginMessage).toBeVisible();
  }

  async assertValidLogin() {
    await expect(this.logoutButton).toBeVisible();
  }

  async assertValidLogout() {
    await expect(this.logoutMessage).toBeVisible();
  }

  
}