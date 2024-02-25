export class LoginPage2 {
    navigateToPage() {
        cy.visit('https://www.edu.goit.global/account/login');
    }

    validateInputs() {
        cy.get('#user_email').type('testowyqa@qa.team');
        cy.get('#user_password').type('QA!automation-1');
        cy.get('[type="submit"]').click();
    }

    openMainMenu() {
        cy.get('#open-navigation-menu-mobile').click();
    }
    
    logOut() {
        cy.get(':nth-child(9) > .next-bve2vl').click();
    }
}