describe('Real World App', () => {
  it('Login - Success', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('Pepe.baba')
    cy.get('#password').type('123456789@')
    cy.get('button').click()
    cy.get('.MuiListSubheader-root').contains('Public')
  })

  it('Login - Success', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('Pepe.ba')
    cy.get('#password').type('123456')
    cy.get('button').click()
    cy.get('[data-test="signin-error"]')
  })
})