/// <reference types="cypress" />


describe('Method Stubbing', () => {
    it('Simple method Stubbing C268',() => {
        const func = {
            exec() {console.log('function ran')}
        }
        const stubb = cy.stub(func,'exec').as('funcAlias')
        func.exec();
        expect(stubb).to.be.calledOnce;
    })
})