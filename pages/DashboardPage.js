import { expect } from "@playwright/test";

export class DashboardPage{
    constructor(page){
        this.page = page;
        this.url = 'https://test.ineedtofindsomeonefor.com/';
        this.title = 'I Need To Find Someone For';
        
    }

    async navigateToWeb(){
        await this.page.goto(this.url)
    }

    async verifyPageLoading(){
        await expect(this.page).toHaveTitle(this.title);
        
    }
}