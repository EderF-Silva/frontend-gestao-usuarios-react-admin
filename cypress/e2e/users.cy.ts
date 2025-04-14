describe("Testes em Usuários", () => {
  const baseUrl = "http://localhost:5173";

  beforeEach(() => {
    cy.visit(`${baseUrl}/#/users`);
  });

  
  it("Verificar se está sem resultados", () => {
    cy.contains("No Users yet").should("exist");
  });

  it("Verificar se o botão de criar usuário existe", () => {
    cy.contains("Create").should("exist");
  });

  it("Criar um novo usuário", () => {
    cy.contains("Create").click();
    cy.get('input[name="name"]').type("Eder Ferreira");
    cy.get('input[name="email"]').type("email@example.com");
    cy.get('input[name="password"]').type("senhadeTestes123");
    cy.contains("Save").click();
    cy.contains("Eder Ferreira").should("exist");
  });

  it("Editar usuário", () => {
    cy.contains("Edit").first().click();
    cy.get('input[name="name"]').clear().type("Eder Ferreira");
    cy.get('input[name="password"]').type("senhadeTestes123");
    cy.contains("Save").click();
    cy.contains("Eder Ferreira").should("exist");
  });

    it("Lista de usuários", () => {
    cy.get(".MuiTableBody-root").should("exist");
    cy.wait(3000); //Esperar 3 segundos para carregar a lista
  });

  it("Excluir Usuário", () => {
  cy.get(":nth-child(6) > .MuiButtonBase-root").first().click(); 
  cy.contains("Eder Ferreira").should("not.exist");
  });
});
