describe('Text box with max characters', () => {
    it('displays the appropriate remaining chars count', () => {
        cy.visit('http://localhost:3000/example-2');

        cy.get('span')
            .invoke('text')
            .should('equal', '15');
            
        cy.get('input').type('hello');
        
        
        cy.get('span')
            .invoke('text')
            .should('equal', '10');
            
        cy.get('input').type(' my friend')
        
        cy.get('span')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevents the user from typing more than 15 chars', () => {
        cy.visit('http://localhost:3000/example-2')

        cy.get('input').type('this is a really long sentence with well over 15 characters')

        cy.get('input')
            .should('have.attr', 'value', 'this is a reall')
    });
});
