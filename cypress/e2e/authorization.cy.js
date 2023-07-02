import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import user from '../fixtures/user.json'


describe("Login", () =>{
    it('Authorization with valid credentials', () => {
        homePage.visit();
        homePage.getCloseFormButton().click();
        homePage.getAccountButton().click();
        homePage.getLoginButton().click();
        loginPage.submitLoginForm(user.email, user.password);
        cy.get('[aria-label="Show the shopping cart"]').should("exist");
      });
});
