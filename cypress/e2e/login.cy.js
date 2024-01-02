describe('Testes de Regressão',()=>{
  
    let data;
    
    before  (()=>{
      cy.fixture('test').then(t=> {
          data = t
      })
    })
  
    context('login', ()=>{
        
        it('Deve abrir o Site', ()=> {
            
            cy.visit('https://staging01.dentalspeed.com')
            cy.title().should('eq', 'Dental Speed | Produtos Odontológicos')
            //cy.get('#onetrust-accept-btn-handler').click()
        })
  
        it('Deve fazer o Login no Site', ()=> {
          const test = data.login
  
  
        })
    })
  })