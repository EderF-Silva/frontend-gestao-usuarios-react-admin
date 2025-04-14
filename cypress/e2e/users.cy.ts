describe("Testes em Usuários", () => {
  const baseUrl = "http://localhost:5173";

  beforeEach(() => {
    cy.visit(`${baseUrl}/#/users`);
  });

  it("Validar que a mensagem 'No users yet.' é exibida quando não existir nenhum usuário no banco de dados", () => {
    cy.contains("No Users yet.").should("exist");
  });

  it("Criar um novo usuário e validar no banco de dados (botão 'Save')", () => {
    cy.contains("Create").click();
    cy.get('input[name="name"]').type("Eder Ferreira");
    cy.get('input[name="email"]').type("ederferreira@teste.com");
    cy.get('input[name="password"]').type("senhadeTestes123");
    cy.contains("Save").click();
  });

  it("Criar um novo usuário e validar no banco de dados (tecla 'Enter')", () => {
    cy.contains("Create").click();
    cy.get('input[name="name"]').type("Joao Pedro");
    cy.get('input[name="email"]').type("joaopedro@dev.com");
    cy.get('input[name="password"]').type("senhadeTestes123456{enter}");
  });

  it("Validar se um usuário está sendo listado", () => {
    cy.get(".MuiTableBody-root").should("exist");
    cy.contains("Eder Ferreira").should("exist");
    cy.contains("Joao Pedro").should("exist");
  });

  it("Editar um usuário e validar a edição no banco de dados", () => {
    cy.contains("Edit").first().click();
    cy.get('input[name="name"]').clear().type("Eder Ferreira Editado");
    cy.get('input[name="password"]').type("novaSenha123");
    cy.contains("Save").click();
    cy.contains("Eder Ferreira Editado").should("exist");
  });

  it("Cancelar a edição de um usuário depois de preencher o formulário", () => {
    cy.contains("Edit").first().click();
    cy.get('input[name="name"]').clear().type("Edição Cancelada");

    //Cancelar a Navegação navegando para outra tela.
    cy.visit(`${baseUrl}/#/users`);
  });

  it("Remover um usuário e validar a remoção no banco de dados", () => {
    cy.get('.ra-delete-button').first().click();
    cy.contains("Edit").first().click();
    cy.get('.ra-delete-button').first().click();
  });
  
  // it("Cancelar a remoção de um usuário depois de clicar no botão 'Delete'", () => {
  //   cy.get('.ra-delete-button').click();
  // });
});
