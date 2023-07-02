
class AddressSelectPage {
    getAddNewAddressButton() {
        return cy.get('[aria-label="Add a new address"]');
    }
    getContinueButton() {
        return cy.get('[aria-label="Proceed to payment selection"]');
    }
    getSelectRadioButton() {
        return cy.get('[class="mat-radio-outer-circle"]');
    }
}



export default new AddressSelectPage();