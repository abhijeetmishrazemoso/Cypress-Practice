/// <reference types="cypress" />


describe('Method spying', () => {
    specify('Stub a method for COMMENT button click to bypass server call',() => {
        const func = {
            exec() {console.log('function ran')}
        }
        const stubb = cy.stub(func,'exec').as('funcAlias')
        func.exec();
        expect(stubb).to.be.calledOnce;
    })
})