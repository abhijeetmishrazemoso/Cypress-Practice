/// <reference types="cypress" />


describe('Method spying', () => {
    specify('Simple method spying',() => {
        const func = {
            exec() {console.log('function ran')}
        }
        const stubb = cy.stub(func,'exec').as('funcAlias')
        func.exec();
        expect(stubb).to.be.calledOnce;
    })
})