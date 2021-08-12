describe("starting app", () => {
  it("Home Page", () => {
    cy.visit("http://localhost:3000/")

    cy.url().should("contains", "http://localhost:3000/")
    cy.get("div").contains("Mansa Kanedama")
    cy.get("button").contains("Click here to view account details").click()
  })
  it("Account Page", () => {
    cy.url().should("contains", "http://localhost:3000/account")
    cy.get("div").contains("Company")

    cy.get("div").contains("Name")
    cy.get("div").contains("SIRET")
    cy.get("div").contains("Address")
    cy.get("div").contains("Accounts")
    cy.get("div").contains("Account No").click()
  })
  it("Selected Account Page", () => {
    cy.get("div").contains("Account No")
    cy.get("div").contains("Balance")
  })
  it("Transaction Table - Sort Amount Ascending", () => {
    cy.get("div").contains("Account No")
    cy.get("div").contains("Balance")
    cy.get("span").contains("Amount").click()
  })
  it("Transaction Table - Sort Amount Descending", () => {
    cy.get("span").contains("Amount").click()
  })
  it("Transaction Table - Sort Timestamp Ascending", () => {
    cy.get("span").contains("Timestamp").click()
  })
  it("Transaction Table - Sort Timestamp Descending", () => {
    cy.get("span").contains("Timestamp").click()
  })
  it("Transaction Table - Filter Transaction Type Credit", () => {
    cy.get("span").contains("Timestamp").click()
    cy.get(".ag-icon-menu").click().type("credit")
    cy.get(".sc-dPaNzc").click()
  })
  it("Transaction Table - Filter Transaction Type Debit", () => {
    cy.wait(1000)
    cy.get("span").contains("Timestamp").click()
    cy.get(".ag-icon-menu")
      .click()
      .dblclick()
      .type(
        "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}"
      )
      .type("debit")
    cy.get(".sc-dPaNzc").click()
  })
  it("Navbar burger icon", () => {
    cy.get("svg").click()
    cy.get("li").contains("Profile").click()
  })
})
