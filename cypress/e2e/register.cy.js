import settings from "../support/settings";

describe('Register', () => {
  beforeEach(() => {
    cy.visit(settings.URL_DEV)
    cy.viewport(settings.MOBILE_VIEWPORT)
  });

  it('Register Page', () => {
    cy.get('.css-94ver2').click()
    cy.contains('h2', 'Registering an account on Holymoment grants you access to Holywings apps.').should('be.visible')
  });

  it('Country Code', () => {
    cy.get('.css-94ver2').click()
    cy.get('.css-1psqhgd').click()
    cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
    cy.get('.MuiInputBase-input').eq(0).type('Indonesia')
  });

  it.only('Form Register', () => {
    //Phone Number
    cy.get('.css-94ver2').click()
    cy.get('.css-1psqhgd').click()
    cy.get('#phone_number').type('123')
    cy.get('#fullname').click()
    cy.get('.css-71xnfy').eq(0)
      .should('contain', 'Invalid Phone Number')
    cy.get('#phone_number').clear()
    cy.get('#fullname').click()
    cy.get('.css-71xnfy').eq(0)
      .should('contain', 'Required')
    cy.get('#phone_number').type('abcde')
    cy.get('#phone_number')
      .should('be.empty')
    cy.get('.MuiSvgIcon-root').eq(3).click()
    cy.get('[data-testid="CloseIcon"]').click()
    cy.get('.MuiTypography-root').eq(2).click()
    //Full Name
    cy.get('#fullname').type('asd')
    cy.get('#fullname')
      .should('have.value', 'asd')
    cy.get('#fullname').clear()
    cy.get('#phone_number').click()
    cy.get('.css-71xnfy').eq(1)
      .should('contain', 'Required')

    //Email
    cy.get('#email').type('asd')
    cy.get('#email')
      .should('have.value', 'asd')
    cy.get('#fullname').click()
    cy.get('.css-71xnfy').eq(2)
      .should('contain', 'Invalid Format (ex. yourname@gmail.com)')
    cy.get('#email').clear()
    cy.get('#email').type('asdasd@mail')
    cy.get('#fullname').click()
    cy.get('.css-71xnfy').eq(2)
      .should('contain', 'Invalid Format (ex. yourname@gmail.com)')
    cy.get('#email').clear()
    cy.get('#email').type('tester@gmail.com')
    cy.get('#fullname').click()
    cy.get('#email').clear()
    cy.get('#fullname').click()
    cy.get('.css-71xnfy').eq(2)
      .should('contain', 'Required')
  });
});