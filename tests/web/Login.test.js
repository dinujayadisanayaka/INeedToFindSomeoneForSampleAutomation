import { log } from "node:console";
import { DashboardPage } from "../../pages/DashboardPage";
import { LoginPage } from "../../pages/LoginPage";
import {test, expect} from '@playwright/test';
import { regularUser } from "../../testData/Credentials";

test ('Existing User Login', async ({page})=>{
    const dashboardPage = new DashboardPage (page)
    const loginPage = new LoginPage(page);

    await dashboardPage.navigateToWeb();
    await dashboardPage.verifyPageLoading();
    await dashboardPage.clickOnSigninButton();
    await loginPage.fillUsername(regularUser.username);
    await loginPage.fillPassword(regularUser.password);
    await loginPage.showHideButtonClick('Show');
    await loginPage.showHideButtonClick('Hide');
    await loginPage.clickSigninButton();

});