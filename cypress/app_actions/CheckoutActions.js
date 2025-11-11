class CheckoutActions {
  visitarLoja() {
    cy.visit('http://lojaebac.ebaconline.art.br/');
  }

  login(email, senha) {
    cy.get('.header_account_list a').click();
    cy.get('#username').type(email);
    cy.get('#password').type(senha);
    cy.get('button[name="login"]').click();
  }

  adicionarProdutoAoCarrinho(produtoNome) {
    cy.contains(produtoNome).click();
    cy.get('button.single_add_to_cart_button').click();
    cy.get('.woocommerce-message').should('contain', `“${produtoNome}” foi adicionado ao seu carrinho`);
  }

  irParaCarrinho() {
    cy.get('.cart-button a').click();
  }

  finalizarCompra() {
    cy.get('.checkout-button').click();
    cy.get('#place_order').click();
  }

  validarPedidoFinalizado() {
    cy.get('.woocommerce-thankyou-order-received').should('contain', 'Obrigado. Seu pedido foi recebido.');
  }
}

export default new CheckoutActions();
