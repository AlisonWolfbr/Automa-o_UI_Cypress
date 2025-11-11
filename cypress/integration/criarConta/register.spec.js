import registerPage from '../../page_objects/RegisterPage';

describe('Fluxo de criação de conta', () => {
  it('Deve criar uma nova conta com sucesso', () => {
    const email = `usuario_${Date.now()}@teste.com`;
    registerPage.visitar();
    registerPage.preencherEmail(email);
    registerPage.preencherSenha('SenhaForte123!');
    registerPage.clicarRegistrar();
    registerPage.validarRegistroComSucesso();
  });
});
