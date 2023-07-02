class LoginPage {
    visit(){
        cy.log('Open website login page');
        cy.visit('/#/login');
    }

    getEmailField(){
        return cy.get('#email');
    }

    getPasswordField(){
        return cy.get('#password');
    }
    
    getLoginButton(){
        return cy.get('#loginButton');
    }

    submitLoginForm(email, password){
        cy.log(`Auth user with email: ${email} and password: ${password}`);

        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getLoginButton().click();
    }

}
export default new LoginPage();