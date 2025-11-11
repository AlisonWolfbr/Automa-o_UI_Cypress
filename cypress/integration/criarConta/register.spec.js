import registerPage from '../../page_objects/RegisterPage';

describe('Fluxo de criação de conta - dinâmico', () => {
  it('Deve criar conta com dados aleatórios', () => {
    const timestamp = Date.now();
    const email = `usuario_${timestamp}@teste.com`;
    const senha = `Senha_${timestamp}!`;

    registerPage.visitar();
    registerPage.preencherEmail(email);
    registerPage.preencherSenha(senha);
    registerPage.clicarRegistrar();
    registerPage.validarRegistroComSucesso();
  });
});
