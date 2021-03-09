describe('launch my app',()=> {

    it('vistaroom site navigation',()=>{
        cy.visit('https://www.vistarooms.com/')
        cy.contains('Partner With Us')
        cy.contains('Partner With Us').click()
        cy.url().should('include','/partner-with-us')

        cy.get('div.col-md-8.log-heading h3:nth-of-type(1)')
        .should('be.visible')
        .and('contain', 'List Your Property With Us')
        .and('have.length', 1)
    })

    it('List Your Property on Vista Rooms form working', ()=>{

        cy.get("input[placeholder='Enter your name']")
        .clear()
        .type('fhdjfhdjf')

        cy.get("input[placeholder='Enter your email-address'][type='email']")
        .clear()
        .type('dgfhdgfhdgh@dghghd.com')

        cy.get("input[placeholder='Enter your number']")
        .clear()
        .type('54545454545')

        cy.get("input[placeholder='Property Location'][name='location']")
        .clear()
        .type('kandivali')

        cy.get("select[formcontrolname='type']")
        .select('hotel')
        .should('have.value','hotel')

        cy.get("select[formcontrolname='hear_form'][formcontrolname='hear_form']")
        .select('facebook')
        .should('have.value','facebook')


    })

})