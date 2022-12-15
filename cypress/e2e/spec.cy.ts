/// <reference types="cypress" />





describe("Home flow", () => {
  before(()=>{
    cy.visit('localhost:3000/')
  })

  it("Display Landing page", () => {
    cy.get("a").contains("Nyankopedia");
  });

  it("Should see 10 cards",()=>{
    cy.get(".card").should("have.length", 10)
  })

  it("should do infinite scroll",()=>{
    cy.scrollTo("bottom")
    cy.get(".card").should("have.length.gt",10)
  })
});
