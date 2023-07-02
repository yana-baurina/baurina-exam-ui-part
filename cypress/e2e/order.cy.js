import user from "../fixtures/user.json";
import card from "../fixtures/card.json"
import { faker } from "@faker-js/faker";
import { login, findProduct } from "../support/helper";
import homePage from "../support/pages/HomePage";
import basketPage from "../support/pages/BasketPage";
import addressSelectPage from "../support/pages/AddressSelectPage";
import addressPage from "../support/pages/AddressPage";
import deliveryMethodPage from "../support/pages/DeliveryMethodPage";
import paymentPage from "../support/pages/PaymentPage";
import orderSummaryPage from "../support/pages/OrderSummaryPage";

user.country = faker.location.country();
user.name = faker.person.firstName();
user.mobile = faker.phone.number("3######");
user.zip = faker.location.zipCode("#####");
user.address = faker.location.streetAddress();
user.city = faker.location.city();
user.state = faker.location.state();

card.cardNumber = faker.finance.creditCardNumber("4### #### #### ####");
card.exprireMonth = faker.number.int({ min: 1, max: 12 }).toString();
card.expireYear = faker.number.int({ min: 2080, max: 2099 }).toString();


it("Find a product and make an order", () => {
    cy.clearAllCookies()
    login(user);
    homePage.visit();

    let product = "Strawberry Juice (500ml)";
    cy.log(`Search ${product}`);
    findProduct(product);

    homePage.getOpenCartButton().click();

    cy.get("mat-cell.mat-column-product").should("contain", `${product}`);

    basketPage.getCheckoutButton().click();

    addressSelectPage.getAddNewAddressButton().click();

    cy.log(
        `Adding new address ${user.country}, ${user.name}, ${user.mobile}, ${user.zip}, ${user.address}, ${user.city}, ${user.state}`
    );

    addressPage.submitNewAddress(
        user.country,
        user.name,
        user.mobile,
        user.zip,
        user.address,
        user.city,
        user.state
    );

    addressSelectPage.getSelectRadioButton().last().click();

    addressSelectPage.getContinueButton().click();

    deliveryMethodPage.getStandartDelivery().click();

    deliveryMethodPage.getContinueButton().click();

    cy.log(
        `Add new card ${user.name}, ${card.cardNumber}, ${card.exprireMonth}, ${card.expireYear}`
    );

    paymentPage.getAddNewCardButton().click();

    paymentPage.addNewCard(user.name, card.cardNumber, card.exprireMonth, card.expireYear);

    paymentPage.getCard().last().click();

    paymentPage.getContinueButton().click();

    orderSummaryPage.getCheckoutButton().click();

    cy.get('h1.confirmation')
        .should('contain', "Thank you for your purchase!")
        .and('have.css', "color", "rgb(104, 159, 56)");
});