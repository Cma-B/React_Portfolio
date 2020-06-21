describe('User can see my job experience and previous education', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#mycv-tab').click();
    }) 
     it('displays my job experience', () => {
      cy.get('#cv-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'My Career Life');
        cy.get('.description').should('contain', 'I started my career journey as a technical sales manager right after graduation from the university,I persued it for 8 years. It seems I was stuck in it!' );
      })
});

  it('displays my bachelor degree', () => {
    cy.get('#cv-2').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Polymer Engineering');
      cy.get('.description').should('contain', 'I have recieved my bachelore degree in Polymer engineering at AmirKabir University of Technology in Iran');
    })
  });

  it('displays my master degree', () => {
    cy.get('#cv-3').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.ui.header').should('contain', 'Strategic Information Systems Management');
      cy.get('.description').should('contain', "I currently study master program at departement of Computer and System Science,The focus is on design, implementation, use and evolution of information systems for any organisation in today's complex digital world.");
    })
  });  
});