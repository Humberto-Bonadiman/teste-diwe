/* eslint-disable no-undef */
/// <reference types="cypress" />

const fetchMock = require('../mocks/fetch');

describe('Testar a página de listagem de contatos', () => {
  it('Verificar se a página mobile com a listagem de contatos possui os dados corretos', () => {
    cy.visit('http://localhost:3000/contacts', {
      onBeforeLoad(win) {
        const autWindow = win;
        autWindow.fetch = fetchMock;
      },
    });
    cy.viewport(390, 844);
    cy.get('[data-testid="left-side-image"]').should('be.visible');
    cy.get('[data-testid="text-header"]').should('have.text', 'Listagem de usuários');
    cy.get('[data-testid="redirect-button"').should('have.text', 'Cadastrar contato');

    for (let index = 0; index < 10; index += 1) {
      cy.get(`[data-testid="${index}-item-user-name"]`);
      cy.get(`[data-testid="${index}-item-user-email"]`);
      cy.get(`[data-testid="${index}-item-user-mobile"]`);
      cy.get(`[data-testid="${index}-item-user-buttons"]`);
    }
  });

  it('Ao clicar no botão "Cadastrar contato" redireciona o usuário para a página de Criar contato', () => {
    cy.visit('http://localhost:3000/contacts');
    cy.viewport(390, 844);
    cy.get('[data-testid="redirect-button"').click();
    cy.url().should('include', 'http://localhost:3000/create');
  })

  it('Verificar se a página web com a listagem de contatos possui os dados corretos', () => {
    cy.visit('http://localhost:3000/contacts', {
      onBeforeLoad(win) {
        const autWindow = win;
        autWindow.fetch = fetchMock;
      },
    });
    cy.get('[data-testid="left-side-image"]').should('be.visible');
    cy.get('[data-testid="text-header"]').should('have.text', 'Voltar');
    cy.get('[data-testid="redirect-button"').should('have.text', 'Adicionar novo contato');

    for (let index = 0; index < 10; index += 1) {
      cy.get(`[data-testid="${index}-item-user-id"]`);
      cy.get(`[data-testid="${index}-item-user-name"]`);
      cy.get(`[data-testid="${index}-item-user-email"]`);
      cy.get(`[data-testid="${index}-item-user-mobile"]`);
      cy.get(`[data-testid="${index}-item-user-buttons"]`);
    }
  })
});