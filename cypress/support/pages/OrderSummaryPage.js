class OrderSummaryPage {
    getCheckoutButton() {
      return cy.get('#checkoutButton');
    }
  }
  export default new OrderSummaryPage();