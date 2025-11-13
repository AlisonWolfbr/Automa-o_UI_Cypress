import createAccountPage from '../pages/createAccountPage'

describe('Fluxo de criação de conta', () => {
  it('Cria uma nova conta', () => {
    const email = `teste${Date.now()}@teste.com`
    createAccountPage.visit();
    createAccountPage.create('Alisson','Teste',email,'Teste@123');
    cy.contains('conta').should('exist');
  });
});
