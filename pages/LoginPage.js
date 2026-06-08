export class LoginPage {
    constructor(page) {
        this.page = page;
        this.EmailTextBox = page.locator('//*[@id="email"]');
        this.PasswordTextBox = page.locator('//*[@id="password"]');
        this.SignInButton = page.locator('//*[@id="root"]/div/div/form/div[3]/button');

    }

    

}