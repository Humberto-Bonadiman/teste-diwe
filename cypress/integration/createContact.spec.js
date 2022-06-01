/* eslint-disable no-undef */
/// <reference types="cypress" />

const infoText = 'Preencha as informações para cadastrar um novo contato';

describe('Testar a página responsável por criar contato', () => {
  it('Verificar se a página apresenta os dados corretos', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="email-input"]').type('user@diwe.com.br');
    cy.get('[data-testid="password-input"]').type('Mob20we23##');
    cy.get('[data-testid="login-submit-btn"]').click();
    cy.get('[data-testid="redirect-button"').click();
    cy.url().should('include', 'http://localhost:3000/create');
    cy.get('[data-testid="info-text"]').should('have.text', infoText);
    cy.get('[data-testid="name-input-create"]').type('João Gomes Aguiar');
    cy.get('[data-testid="name-input-create"]').should('have.value', 'João Gomes Aguiar');
    cy.get('[data-testid="email-input-create"]').type('joao_aguiar@email.com');
    cy.get('[data-testid="email-input-create"]').should('have.value', 'joao_aguiar@email.com');
    cy.get('[data-testid="mobile-input"]').type('11991759090');
    cy.get('[data-testid="mobile-input"]').should('have.value', '11991759090');
    cy.get('[data-testid="create-contact-btn"]').click();
    cy.url().should('include', 'http://localhost:3000/contacts');
    cy.get('[data-testid="create-alert-message"]')
  })
});