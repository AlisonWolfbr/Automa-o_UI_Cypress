class CreateAccountPage {
  elements = {
    nome: () => cy.get('#reg_billing_first_name'),
    sobrenome: () => cy.get('#reg_billing_last_name'),
    email: () => cy.get('#reg_email'),
    senha: () => cy.get('#reg_password'),
    btn: () => cy.get(':input[type=submit]')
  }

  visit() { cy.visit('/minha-conta'); }
  create(nome, sobrenome, email, senha){
    this.elements.nome().type(nome)
    this.elements.sobrenome().type(sobrenome)
    this.elements.email().type(email)
    this.elements.senha().type(senha)
    this.elements.btn().click()
  }
}
export default new CreateAccountPage();
