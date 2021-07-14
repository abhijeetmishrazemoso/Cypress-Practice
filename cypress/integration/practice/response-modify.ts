/// <reference types="cypress" />

describe('Practice Response Stubbing', () => {
    it('Send request to url and intercept,Modify a response from server',() => {
        const responseStub = {
            statusCode: 200,
            body: {
                name: "Nice name",
                message: ". This text is added to response using response modification."
            }
        }
        cy.intercept('**/comments/**', (req)=>{
            req.continue((res) => {
                res.body.body += responseStub.body.message;
            })
        })
        .as('serverResponse')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click();
        
        cy.wait('@serverResponse').then(() => {
            cy.get("div.network-comment")
            .should('include.text',responseStub.body.message);
        })
    })
})