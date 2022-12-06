describe('empty spec', () => {
  it('Display Landing page', () => {
    cy.visit('localhost:3000/')
    cy.get("h1").contains("React Stater")
  })
})