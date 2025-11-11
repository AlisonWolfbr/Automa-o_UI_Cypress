import actions from '../../app_actions/CheckoutActions';

describe('Fluxo de checkout carrinho de compras', () => {
  it('Deve permitir compra de um produto com sucesso', () => {
    actions.visitarLoja();
    actions.login('usuario_teste@dominio.com','SenhaForte123!');
    actions.adicionarProdutoAoCarrinho('Hoodie with Logo');
    actions.irParaCarrinho();
    actions.finalizarCompra();
    actions.validarPedidoFinalizado();
  });
});
