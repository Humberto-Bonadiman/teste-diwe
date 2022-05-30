/* eslint-disable no-undef */
/// <reference types="cypress" />

const beforeLogin = 'Para ter acesso a todas as funcionalidades que podemos oferecer, faça login ou crie uma nova conta.';
const makeLogin = 'Faça login para acessar nossa plataforma';

describe('Testar a página de login', () => {
  it('Verificar se a primeira página de login no Mobile está correta', () => {
    cy.visit('http://localhost:3000/login');
    cy.viewport(390, 844);
    cy.get('[data-testid="image-login"]').should('be.visible');
    cy.get('.welcome-text').should('have.text', 'Bem-vindo! É hora de começar uma nova experiência');
    cy.get('.before-login').should('have.text', beforeLogin);
    cy.get('.button-start').should('have.text', 'Começar');
    cy.get('.button-start').click();
    cy.get('.before-login').should('not.exist');
  });

  it('Verificar se a segunda página de login no Mobile está correta', () => {
    cy.visit('http://localhost:3000/login');
    cy.viewport(390, 844);
    cy.get('.button-start').click();
    cy.get('header').should('have.text', 'Login');
    cy.get('.welcome').should('have.text', 'Bem-vindo(a)!');
    cy.get('.make-login-text').should('have.text', makeLogin);
    cy.get('[data-testid="email-input"]').type('email@mail.com');
    cy.get('[data-testid="email-input"]').should('have.value', 'email@mail.com');
    cy.get('[data-testid="password-input"]').type('1234567');
    cy.get('[data-testid="password-input"]').should('have.value', '1234567');
    cy.get('.alert').should('not.exist');
    cy.get('[data-testid="login-submit-btn"]').click();
    cy.get('.alert').should('have.text', 'Email ou senha incorretos');
  });

  it('Verificar se a página web contém os dados corretos', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.welcome').should('have.text', 'Bem-vindo(a)!');
    cy.get('.make-login-text').should('have.text', makeLogin);
    cy.get('[data-testid="email-input"]').type('email@mail.com');
    cy.get('[data-testid="email-input"]').should('have.value', 'email@mail.com');
    cy.get('[data-testid="password-input"]').type('1234567');
    cy.get('[data-testid="password-input"]').should('have.value', '1234567');
    cy.get('.alert').should('not.exist');
    cy.get('[data-testid="login-submit-btn"]').click();
    cy.get('.alert').should('have.text', 'Email ou senha incorretos');
  });
});