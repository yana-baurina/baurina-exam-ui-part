export function login(user) {
    cy.log('Open website login page');
    cy.visit('/login');
  
    cy.log('Check user is unauthorized');
    cy.getCookie('token').should('be.null');
  
    cy.log('Authorize user');
    cy.get('[aria-label="Close Welcome Banner"]').click();
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('#loginButton').click();
    cy.get('.cc-dismiss').click();
}

export function findProduct(productName) {
    cy.get(".mat-grid-list").then((body) => {
      if (body.find(`.item-name:contains(${productName})`).length > 0) {
        cy.get(`.item-name:contains(${productName})`)
        .parent().as('productCard');
        cy.get('@productCard').parent().as('productCard1');
        cy.get('@productCard1').parent().as('productContainer');
        cy.get('@productContainer')
        .find('[aria-label="Add to Basket"]')
        .click();
      } else {
        cy.get('[aria-label="Next page"]').click();
        findProduct(productName);
      }
    });
  }