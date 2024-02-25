export class LoginPage {
    navigateToPage() {
        cy.visit('https://www.edu.goit.global/account/login');
    }

    validateInputs() {
        cy.get('#user_email').type('user888@gmail.com');
        cy.get('#user_password').type('1234567890');
        cy.get('[type="submit"]').click();
    }

    openMainMenu() {
        cy.get('#open-navigation-menu-mobile').click();
    }
    
    logOut() {
        cy.get(':nth-child(12) > .next-bve2vl').click();
    }

}