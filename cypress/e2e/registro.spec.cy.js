describe('Real World App', () => {
    it('Registro - Success', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[href="/signup"]').click()
    cy.get('#firstName').type('Pepe')
    cy.get('#lastName').type('baba')
    cy.get('#username').type('Pepe.baba')
    cy.get('#password').type('123456789@')
    cy.get('#confirmPassword').type('123456789@')
    cy.get('[tabindex="0"]').click()
    })

    it('Registro - Fail', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/signup"]').click()
        cy.get('#firstName').type('Pepe')
        cy.get('#lastName').type('baba')
        cy.get('#username').type('Pepe.baba')
        cy.get('#password').type('123')
        cy.get('#confirmPassword').type('123')
        cy.get('#password-helper-text')
        });
  })