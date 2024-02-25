describe('1st block of tests', () => {
  it('login  & logout 1', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.get('#user_email').type('user888@gmail.com');

    cy.get('#user_password').type('1234567890');

    cy.get('[type="submit"]').click();

    cy.get('#open-navigation-menu-mobile').click(); 

    cy.get(':nth-child(12) > .next-bve2vl').click(); 
  })

  it('login  & logout 2', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.get('#user_email').type('testowyqa@qa.team');

    cy.get('#user_password').type('QA!automation-1');

    cy.get('[type="submit"]').click();

    cy.get('#open-navigation-menu-mobile').click(); 

    cy.get(':nth-child(9) > .next-bve2vl').click(); 
  })
})