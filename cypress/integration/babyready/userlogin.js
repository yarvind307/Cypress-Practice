 ///<refernce type ="cypress" />



describe('My First Test', function() 
    {
        it('User login/logout', function() 
            {
                cy.visit('https://www.babyready.app/')
                cy.title().should('eq','Home | BabyReady')
                cy.location('protocol').should('eq','https:')
                cy.contains('Blog').should('be.visible')
                cy.get('#comp-kfmnu2up4label').click()
                cy.contains('All Posts', {timeout:10000}).should('be.visible')
                cy.url().should('include','blog')
                //check if that post is available or not.
                cy.get('div.blog-post-homepage-title-font.blog-post-homepage-TOI-title-color').contains('Ovarian Cysts: All You Need to Know').should('be.visible')
                cy.get('#pgi5fc6281ee8d9d20017277b57_1').click()
                
                //cy.wait(12000)

                cy.url().should('include', 'ovarian-cysts-all-you-need-to-know')
                cy.get('button._1hKqA.blog-button-color').click()

                cy.get("button[]")


                




                

               
            })



    })