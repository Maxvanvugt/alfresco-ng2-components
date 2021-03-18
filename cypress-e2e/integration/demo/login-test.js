/// <reference types="cypress" />
import UserInfoPage from '../../pages/user-info.page';

describe('Login', () => {
    const userInfo = new UserInfoPage();
    const username = Cypress.env('hr_user');
    const password = Cypress.env('hr_user_password');

    before(() => {
        cy.loginUI(username, password);
    })

    after(() => {
        cy.logout();
        cy.visit('/');
    })

    it('Login UI test', () => {
        userInfo.getUserFullName().should('contain', 'HR User');
    })
})