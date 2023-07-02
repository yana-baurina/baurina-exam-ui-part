class HomePage {
    visit() {
        cy.log('Open website home page');
        cy.visit('/');
    }
    getCloseFormButton() {
        return cy.get('.close-dialog')
    }

    getAccountButton() {
        return cy.get('#navbarAccount')
    }

    getLoginButton() {
        return cy.get('#navbarLoginButton')
    }

    getSearchButton() {
        return cy.get(".mat-search_icon-search");
    }

    getAddToCartButton() {
        return cy.get('[aria-label="Add to Basket"]');
    }

    getOpenCartButton() {
        return cy.get('[aria-label="Show the shopping cart"]');
    }
    getSideMenu() {
        return cy.get('[aria-label="Open Sidenav"]');
    }

    getFeedbackTab() {
        return cy.get('.menu-text:contains("Customer Feedback")');
    }

    getReviewField() {
        return cy.get('[aria-label="Text field to review a product"]');
    }

    getSubmitReviewButton() {
        return cy.get('[aria-label="Send the review"]');
    }

    getCloseCookiesButton() {
        return cy.get(".cc-dismiss");
    }

}
export default new HomePage();