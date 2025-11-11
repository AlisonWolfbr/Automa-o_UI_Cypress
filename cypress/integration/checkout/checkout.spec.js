import actions from '../../app_actions/CheckoutActions';

describe('Fluxo de checkout com dados dinâmicos', () => {
  const email = `cliente_${Date.now()}@teste.com`;
  const senha = 'SenhaForte123!';
  const produto = 'Hoodie with Logo';

  it('Deve comprar produto com dados dinâmicos', () => {
    actions.visitarLoja();
    actions.login(email, senha);
    actions.adicionarProdutoAoCarrinho(produto);
    actions.irParaCarrinho();
    actions.finalizarCompra();
    actions.validarPedidoFinalizado();
  });
});
