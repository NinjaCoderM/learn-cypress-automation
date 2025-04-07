Navigation to url - visit - Test2.cy.js
cypress run -> command line, test without open 
cypress run --headed
cypress run --browser firefox
cypress run --record --spec 'cypress/e2e/Test.cy.js'
copy selector from DevTools #root > div > div.products-wrapper > div > div:nth-child(3)
copy xpath from DevTools //*[@id="root"]/div/div[1]/div/div[3]
cypress only supports css selector -> DevTools console $$('input[class="search-keyword"]')  
auch $$('input[class="search-keyword"][type="search"]')
auch $$('form input')