class AddressPage {
    getCountryField() {
      return cy.get('[data-placeholder="Please provide a country."]');
    }
  
    getNameField() {
      return cy.get('[data-placeholder="Please provide a name."]');
    }
  
    getMobileField() {
      return cy.get('[data-placeholder="Please provide a mobile number."]');
    }
  
    getZipField() {
      return cy.get('[data-placeholder="Please provide a ZIP code."]');
    }
  
    getAddressField() {
      return cy.get('[data-placeholder="Please provide an address."]');
    }
  
    getCityField() {
      return cy.get('[data-placeholder="Please provide a city."]');
    }
  
    getStateField() {
      return cy.get('[data-placeholder="Please provide a state."]');
    }
  
    getSubmitButton() {
      return cy.get('#submitButton');
    }
  
    submitNewAddress(country, name, mobile, zip, address, city, state) {
      this.getCountryField().type(country);
      this.getNameField().type(name);
      this.getMobileField().type(mobile);
      this.getZipField().type(zip);
      this.getAddressField().type(address);
      this.getCityField().type(city);
      this.getStateField().type(state);
      this.getSubmitButton().click();
    }
  }
  export default new AddressPage();