/// <reference types="cypress" />

describe('Intercept e validações da API do carrinho EBAC', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2');
    cy.visit('http://lojaebac.ebaconline.art.br/');
  });

  it('Deve simular e validar adição de item ao carrinho', () => {
    cy.intercept('POST', '**/wc-api/v3/cart/add*', {
      statusCode: 200,
      body: {
        success: true,
        message: 'Item adicionado com sucesso',
        cart_hash: '123abc'
      }
    }).as('addItem');

    cy.get('.product').first().find('.add_to_cart_button').click();

    cy.wait('@addItem').its('response.statusCode').should('eq', 200);
    cy.get('@addItem').then((intercept) => {
      expect(intercept.response.body.success).to.be.true;
      expect(intercept.response.body.message).to.include('sucesso');
    });
  });

  it('Deve simular e validar atualização de quantidade no carrinho', () => {
    cy.intercept('POST', '**/wc-api/v3/cart/update*', {
      statusCode: 200,
      body: {
        success: true,
        message: 'Quantidade atualizada',
        cart: { total: 'R$ 200,00' }
      }
    }).as('updateItem');

    cy.get('.cart-button a').click();
    cy.get('.qty').clear().type('2');
    cy.get('[name="update_cart"]').click();

    cy.wait('@updateItem').its('response.statusCode').should('eq', 200);
    cy.get('@updateItem').then((intercept) => {
      expect(intercept.response.body.cart.total).to.include('R$');
    });
  });

  it('Deve simular e validar remoção de item do carrinho', () => {
    cy.intercept('POST', '**/wc-api/v3/cart/remove*', {
      statusCode: 200,
      body: {
        success: true,
        message: 'Item removido do carrinho'
      }
    }).as('removeItem');

    cy.get('.remove').first().click();
    cy.wait('@removeItem').its('response.statusCode').should('eq', 200);
    cy.get('@removeItem').then((intercept) => {
      expect(intercept.response.body.message).to.include('removido');
    });
  });
});
