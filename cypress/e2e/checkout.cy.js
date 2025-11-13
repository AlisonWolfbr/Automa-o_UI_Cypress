import cartActions from '../actions/cartActions'

describe('Fluxo de checkout', () => {
  it('Adiciona item e vai ao checkout', () => {
    cartActions.addProduct();
    cartActions.goToCheckout();
    cy.contains('Finalizar compra').should('exist');
  });
});
