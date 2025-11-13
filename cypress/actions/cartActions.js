class CartActions {
  addProduct(){
    cy.visit('/produto/lapis');
    cy.get('.single_add_to_cart_button').click();
  }
  goToCheckout(){
    cy.get('.woocommerce-message a').click();
    cy.get('.checkout-button').click();
  }
}
export default new CartActions();
