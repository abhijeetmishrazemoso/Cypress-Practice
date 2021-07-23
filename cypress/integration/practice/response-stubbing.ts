/// <reference types="cypress" />

describe('Practice Response Stubbing', () => {
    it('Send request to url and intercept,stub a response C2378',() => {
        const responseStub = {
            statusCode: 200,
            body: {
                name: "Nice name",
                body: "This is simply amazing"
            }
        }
        cy.intercept('**/comments/**', responseStub)
        .as('serverResponse')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click();
        
        cy.wait('@serverResponse')
        .its('response.body').should('deep.equal', responseStub.body);
        cy.get(".network-comment").should('have.text',responseStub.body.body);
    })
})