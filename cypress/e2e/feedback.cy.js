import homePage from "../support/pages/HomePage";
import { faker } from "@faker-js/faker";

let randomSentence = faker.lorem.sentence(5);

describe("Login", () =>{
    it('Leave feedback', () => {
        cy.visit('/contact');
        cy.get('.close-dialog').click();
        cy.get('[data-placeholder="What did you like or dislike?"]').type(randomSentence);
        cy.get('#rating').type('{rightArrow}{rightArrow}{leftArrow}')
        cy.get('[aria-label="CAPTCHA code which must be solved"]').invoke('text').then((captchaText) => {
            const result = eval(captchaText);
        cy.get('[placeholder="Please enter the result of the CAPTCHA."]').type(result);
        cy.get('#submitButton').click();

      });
    })
});
