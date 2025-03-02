import { BasePage } from './BasePage';

export class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
        this.signUpButton = 'button:has-text("Sign up")';
        this.nameInput = 'input[name="name"]';
        this.lastNameInput = 'input[name="lastName"]';
        this.emailInput = 'input[name="email"]';
        this.passwordInput = 'input[name="password"]';
        this.repeatPasswordInput = 'input[name="repeatPassword"]';
        this.registerButton = '.modal-footer > .btn-primary';
    }

    async openSignUpModal() {
        await this.clickButton(this.signUpButton);
    }

    async fillRegistrationForm(name, lastName, email, password, repeatPassword) {
        await this.fillField(this.nameInput, name);
        await this.fillField(this.lastNameInput, lastName);
        await this.fillField(this.emailInput, email);
        await this.fillField(this.passwordInput, password);
        await this.fillField(this.repeatPasswordInput, repeatPassword);
    }
    

    async submitRegistration() {
        await this.page.click(this.registerButton);
    }

    async focusNameInput() {
        const nameInput = this.page.locator(this.nameInput); 
        await nameInput.focus();   
    }
    async focusLastNameInput() {
        const lastNameInput = this.page.locator(this.lastNameInput); 
        await lastNameInput.focus();   
    }
    async focusEmailInput() {
        const emailInput = this.page.locator(this.emailInput); 
        await emailInput.focus();   
    }
    async focusPassInput() {
        const passInput = this.page.locator(this.passwordInput); 
        await passInput.focus();   
    }
}
