import { expect } from "@playwright/test";

export class LoggedDashboardPage {
    constructor(page){
        this.page = page
        this.profileName = page.locator('//*[@id="root"]/header/div/div[2]/nav/span');
        this.myProfileButton = page.locator('//*[@id="root"]/header/div/div[2]/nav/a[1]');
    }

    async checkProfileName(profileUseName){
        await expect(this.profileName).toContainText(profileUseName);
    }

    async clickMyProfileButton(){
        await this.myProfileButton.click();
    }

}