 ///<refernce type ="cypress" />

describe('My First Test', function() 
    {
        it('verifiy name Positive Test ', function() 
            {
                cy.visit('https://www.babyready.app/')
                cy.title().should('eq','Home | BabyReady')
                
            })

        it('verifiy name Negative Test ', function() 
            {
                cy.visit('https://www.babyready.app/')
                cy.title().should('eq','BabyReady')
                
            })

        it('Book Appointment Positive ', function()
        {
            cy.visit('https://www.babyready.app/')

            cy.get('#input_comp-kfo1vvxb').clear().type('testing')

            cy.get('#input_comp-kfo1vvxt').clear().type('test@gmail.com')

            cy.get('#input_comp-kfo23uyn').clear().type('8745621154')

            cy.get('#input_comp-kfo24ojz').clear().type('kandivali')

            cy.wait(2000)

            cy.get("._1_kc0").click()
            

        })

        it('Book Appointment Negative', function()
        {
            cy.visit('https://www.babyready.app/')

            cy.get('#input_comp-kfo1vvxb').clear().type('testing')

            cy.get('#input_comp-kfo1vvxt').clear().type('987465651')

            cy.get('#input_comp-kfo23uyn').clear().type('8745621154')

            cy.get('#input_comp-kfo24ojz').clear().type('kandivali')

            cy.wait(2000)

            cy.get("._1_kc0").click()
            

        })

        it('Book Appointment Negative', function()
        {
            cy.visit('https://www.babyready.app/')

            cy.get('#input_comp-kfo1vvxb').clear().type('testing')

            cy.get('#input_comp-kfo1vvxt').clear().type('xfgdghffghfhg')

            cy.get('#input_comp-kfo23uyn').clear().type('8745621154')

            cy.get('#input_comp-kfo24ojz').clear().type('kandivali')

            cy.wait(2000)

            cy.get("._1_kc0").click()
            

        })

            
    })