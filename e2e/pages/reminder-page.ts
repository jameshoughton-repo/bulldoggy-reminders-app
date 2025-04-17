import { expect, type Locator, type Page } from '@playwright/test';

export class RemindersPage {
  readonly page: Page;
  readonly addFirstListButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.addFirstListButton = page.getByRole('img').nth(1);

  }

  async newlist() {
    await this.addFirstListButton.click();
  }

}