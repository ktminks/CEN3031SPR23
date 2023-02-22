describe('routing.cy.ts', () => {
    it('should load the home page', () => {
      cy.visit('/');
      cy.get('h1').should('contain', 'Recipe Book');
    });
  });
  