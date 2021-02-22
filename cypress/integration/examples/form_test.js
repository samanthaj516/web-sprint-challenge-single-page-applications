describe("Order Form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const name = () => cy.get('[data-cy=name]');
    const size = () => cy.get('[data-cy=size]');
    const garlicRanch = () => cy.get('[data-cy=garlicRanch]')
    const pepperoni = () => cy.get('[data-cy=pepperoni]');
    const onions = () => cy.get('[data-cy=onions]');
    const submitBtn = () => cy.get('[data-cy=submit]')

    it("Can fill out name", () => {
        name()
            .type('Samantha Johnson')
            .should('have.value', 'Samantha Johnson');
    })

    it("Can select size", () => {
        size()
            .select('medium')
            .should('have.value', 'medium');
    })

    it("Can select multiple toppings", () => {
        pepperoni()
            .check()
            .should('be.checked');
        onions()   
            .check()
            .should('be.checked');
    })

    it("Can submit form", () => {
        name()
            .type('Samantha Johnson');
        size()
            .select('medium');
        garlicRanch()
            .check();
        pepperoni()
            .check();
        submitBtn()
            .should('not.be.disabled')
            .click();
    })
})