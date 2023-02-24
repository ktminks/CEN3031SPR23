// Cypress end-to-end (integration) tests
// This file [currently] tests routing of the frontend

describe('routing.cy.ts', () => {
  it('should display the site title', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Recipe Book');
  });
  it('should redirect from "/" to "/recipes"', () => {
    cy.visit('/');
    cy.url().should('contain', '/recipes');
  });
  });
  