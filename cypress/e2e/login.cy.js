import settings from "../support/settings";

describe('Login', () => {
  beforeEach(() => {
    cy.visit(settings.URL_DEV)
    cy.viewport(settings.MOBILE_VIEWPORT)
  });

  it('Country Code Selection', () => {
    cy.get('.css-10plje6').click()
    cy.contains('h2', 'Sign In').should('be.visible')
    cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
    cy.get('.MuiInputBase-input').eq(0).type('Indonesia')
  });

  it('Delete Country Code', () => {
    cy.get('.css-10plje6').click()
    cy.contains('h2', 'Sign In').should('be.visible')
    cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
    cy.get('.MuiInputBase-input').eq(0).clear()
    cy.get('.MuiInputBase-input').eq(1).type('6280000009')
    cy.get('.MuiButtonBase-root').eq(1).click()
    cy.get('.css-1xsto0d').should('contain', 'Oops! Something went wrong')
  });

  it('Input Alphabet', () => {
    cy.get('.css-10plje6').click()
    cy.contains('h2', 'Sign In').should('be.visible')
    cy.get('.MuiInputBase-input').eq(1).type('abcdefg!@#')
    cy.contains('h2', 'Sign In').click()
    cy.get('.MuiInputBase-input').should('be.empty')
    cy.get('.MuiFormHelperText-root').should('contain', 'Required')
  });

  it('Non-Registered Number', () => {
    cy.get('.css-10plje6').click()
    cy.contains('h2', 'Sign In').should('be.visible')
    cy.get('.MuiInputBase-input').eq(1).type('628000000762')
    cy.get('.MuiButtonBase-root').eq(2).click()
    cy.get('.css-1xsto0d').should('contain', 'User not found')
  });

  it('Invalid Phone Number', () => {
    cy.get('.css-10plje6').click()
    cy.contains('h2', 'Sign In').should('be.visible')
    cy.get('.MuiInputBase-input').eq(1).type('123')
    cy.contains('h2', 'Sign In').click()
    cy.get('.MuiFormHelperText-root').should('contain', 'Invalid Phone Number')
  });

  it('Back Button', () => {
    cy.get('.css-10plje6').click()
    cy.contains('h2', 'Sign In').should('be.visible')
    cy.get('[data-testid="ArrowBackIosNewOutlinedIcon"]').click()
    cy.contains('h2', 'Perfect moment at HWG, Captured.').should('be.visible')
  });
});