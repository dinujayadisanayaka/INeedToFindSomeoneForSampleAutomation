import { expect } from "@playwright/test";

export class MyProfilePage {
    constructor(page){
        this.page = page;
        this.url = 'https://test.ineedtofindsomeonefor.com/me';
        this.profileEmail = page.locator('//*[@id="root"]/div/div/form/div[1]/div[1]/input');
    }

    async verifyMyProfilePageLoading(){
        await expect(this.page).toHaveURL(this.url);
    }

    async verifyMyProfileEmail(expectedEmail){
        await expect(this.profileEmail).toHaveValue(expectedEmail);
    }
}