import { DashboardPage } from "../../pages/DashboardPage";
import {test,expect} from'@playwright/test';

test ('Verify Successfull Page Navigation', async ({page})=>{
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateToWeb();
    await dashboardPage.verifyPageLoading();
});