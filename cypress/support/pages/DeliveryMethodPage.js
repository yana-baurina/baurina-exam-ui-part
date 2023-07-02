class DeliveryMethodPage {
    getOneDayDelivery() {
      return cy.get('[class="mat-radio-outer-circle"]').eq(0);
    }
  
    getFastDelivery() {
      return cy.get('[class="mat-radio-outer-circle"]').eq(1);
    }
  
    getStandartDelivery() {
      return cy.get('[class="mat-radio-outer-circle"]').eq(2);
    }
  
    getContinueButton() {
      return cy.get('[aria-label="Proceed to delivery method selection"]');
    }
  }
  export default new DeliveryMethodPage();