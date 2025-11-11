class RegisterPage {
  visitar() {
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/');
  }

  preencherEmail(email) {
    cy.get('#reg_email').type(email);
  }

  preencherSenha(senha) {
    cy.get('#reg_password').type(senha);
  }

  clicarRegistrar() {
    cy.get('button[name="register"]').click();
  }

  validarRegistroComSucesso() {
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Hello');
  }
}

export default new RegisterPage();
