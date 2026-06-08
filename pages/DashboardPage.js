import { expect } from "@playwright/test";

export class DashboardPage{
    constructor(page){
        this.page = page;
        this.url = 'https://test.ineedtofindsomeonefor.com/';
        this.title = 'I Need To Find Someone For';
        this.SignInButton = page.locator('//*[@id="root"]/header/div/div[2]/nav/a[2]');
        
    }

    async navigateToWeb(){
        await this.page.goto(this.url)
    }

    async verifyPageLoading(){
        await expect(this.page).toHaveTitle(this.title);
    }

    async clickOnSigninButton(){
        await this.SignInButton.click();
    }
}