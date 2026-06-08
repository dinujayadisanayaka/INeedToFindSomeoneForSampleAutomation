export class LoginPage {
    constructor(page) {
        this.page = page;
        this.EmailTextBox = page.locator('//*[@id="email"]');
        this.PasswordTextBox = page.locator('//*[@id="password"]');
        this.SignInButton = page.locator('//*[@id="root"]/div/div/form/div[3]/button');
        this.ShowHideButton = page.locator("//button[contains(text(),'Show')]");

    }

    async fillUsername(username){
        await this.EmailTextBox.fill(username)
    }

        async fillPassword(password){
        await this.PasswordTextBox.fill(password)
    }

        async clickSigninButton(){
        await this.SignInButton.click();
    }

    async showHideButtonClick(state){
        await this.page.locator(`//button[contains(text(),'${state}')]`).click();
    }



}