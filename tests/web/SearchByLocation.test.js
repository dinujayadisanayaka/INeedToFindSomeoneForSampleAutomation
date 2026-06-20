import { log } from "node:console";
import { DashboardPage } from "../../pages/DashboardPage";
import { LoginPage } from "../../pages/LoginPage";
import {test, expect} from '@playwright/test';
import { regularUser } from "../../testData/Credentials";
import { LoggedDashboardPage } from "../../pages/LoggedDashboardPage";
import { MyProfilePage } from "../../pages/MyProfilePage";

test ('Existing User Login', async ({page})=>{
    const dashboardPage = new DashboardPage (page)
    const loginPage = new LoginPage(page);
    const loggedDashboardPage = new LoggedDashboardPage (page);
    const myProfilePage = new MyProfilePage(page);

    await dashboardPage.navigateToWeb();
    await dashboardPage.verifyPageLoading();
    await dashboardPage.clickOnSigninButton();
    await loginPage.fillUsername(regularUser.username);
    await loginPage.fillPassword(regularUser.password);
    await loginPage.showHideButtonClick('Show');
    await loginPage.showHideButtonClick('Hide');
    await loginPage.clickSigninButton();
    await loggedDashboardPage.checkProfileName(regularUser.loggedUserName);
    await loggedDashboardPage.clickMyProfileButton();
    await myProfilePage.verifyMyProfilePageLoading();
    await myProfilePage.verifyMyProfileEmail(regularUser.username);

});