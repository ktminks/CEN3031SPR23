describe('Home Page', () => {
  it('should load the home page', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Welcome to My Recipe Book');
  });
});

describe('Frontend.cy.ts', () => {
  it('playground', () => {
    // cy.mount()
  })
})