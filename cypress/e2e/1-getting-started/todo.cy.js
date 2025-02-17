/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress


describe('Header and Footer Buttons and Links Test', () => {
  beforeEach(() => {
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
  });

    // it('Required fields and color check', () => {

    //   cy.contains('Sign up').should('be.visible');
    //   cy.get('.hero-descriptor_btn.btn.btn-primary').click();
    //   cy.contains('Registration').should('be.visible');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');

    //   cy.get('#signupName').click();
    //   cy.get('#signupLastName').click();
    //   cy.contains('Name required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');

    //   cy.get('#signupEmail').click();
    //   cy.contains('Last name required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled')

    //   cy.get('#signupPassword').click();
    //   cy.contains('Email required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');

    //   cy.get('#signupRepeatPassword').click();
    //   cy.contains('Password required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');

    //   cy.get('#signupName').click();
    //   cy.contains('Re-enter password required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    //   cy.contains('Register').should('be.visible');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');
    // });


    // it('Wrong Data and color check', () => {

    //   cy.contains('Sign up').should('be.visible');
    //   cy.get('.hero-descriptor_btn.btn.btn-primary').click();
    //   cy.contains('Registration').should('be.visible');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');

    //   cy.get('#signupName').click();
    //   cy.get('#signupName').type('1');
    //   cy.get('#signupLastName').click();
    //   cy.contains('Name is invalid').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');;

    //   cy.get('#signupLastName').type('1');
    //   cy.get('#signupEmail').click();
    //   cy.contains('Last name is invalid').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');;

    //   cy.get('#signupEmail').type('1');
    //   cy.get('#signupPassword').click();
    //   cy.contains('Email is incorrect').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');;      

    //   cy.get('#signupPassword').type('1');
    //   cy.get('#signupRepeatPassword').click();
    //   cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible')
    //   .and('have.css', 'color', 'rgb(220, 53, 69)');  
       
    // }); 

    // it('Wrong Length and color check for "Name" and "Last Name fields"', () => {

    //   cy.contains('Sign up').should('be.visible');
    //   cy.get('.hero-descriptor_btn.btn.btn-primary').click();
    //   cy.contains('Registration').should('be.visible');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');

    //   cy.get('#signupName').click();
    //   cy.get('#signupName').type('M');
    //   cy.get('#signupLastName').click();
    //   cy.contains('Name has to be from 2 to 20 characters long').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');

    //   cy.get('#signupLastName').type('V');
    //   cy.get('#signupName').click();
    //   cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');

    //   cy.get('#signupName').type('mmmmmmmmmmmmmmmmmmmm');
    //   cy.get('#signupLastName').click();
    //   cy.contains('Name has to be from 2 to 20 characters long').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');

    //   cy.get('#signupLastName').type('vvvvvvvvvvvvvvvvvvvv');
    //   cy.get('#signupName').click();
    //   cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');

    //   cy.get('#signupName').clear();
    //   cy.get('#signupName').type('Mykhailo');
    //   cy.get('#signupLastName').click();
    //   cy.get('#signupLastName').clear();
    //   cy.get('#signupLastName').type('Vasiliev');
    //   cy.get('#signupEmail').click();
    //   cy.contains('Name has to be from 2 to 20 characters long').should('not.exist');
    //   cy.contains('Last name has to be from 2 to 20 characters long').should('not.exist');  

    // }); 

    // it('Wrong Length and color check for "Password" and "Re-enter Password fields AND Checking the same between them"', () => {

    //   cy.contains('Sign up').should('be.visible');
    //   cy.get('.hero-descriptor_btn.btn.btn-primary').click();
    //   cy.contains('Registration').should('be.visible');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');

    //   cy.get('#signupPassword').click();
    //   cy.get('#signupPassword').type('qwerasdf');
    //   cy.get('#signupRepeatPassword').click();
    //   cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled'); 

    //   cy.get('#signupPassword').click();
    //   cy.get('#signupPassword').type('1');
    //   cy.get('#signupRepeatPassword').click();
    //   cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled'); 

    //   cy.get('#signupPassword').click();
    //   cy.get('#signupPassword').type('Q');
    //   cy.get('#signupRepeatPassword').click();
    //   cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('not.exist');

    //   // Wrong repeat Password
    //   cy.get('#signupRepeatPassword').type('qwerasdf1W');
    //   cy.get('#signupName').click();
    //   cy.contains('Passwords do not match').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled'); 

    //   cy.get('#signupRepeatPassword').click();
    //   cy.get('#signupRepeatPassword').clear();
    //   cy.get('#signupRepeatPassword').type('qwerasdf1Q');
    //   cy.get('#signupName').click();
    //   cy.contains('Passwords do not match').should('not.exist');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled'); 
    // }); 



    // it('Creating New User', () => {

    //   cy.contains('Sign up').should('be.visible');
    //   cy.get('.hero-descriptor_btn.btn.btn-primary').click();
    //   cy.contains('Registration').should('be.visible');
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');

    //   cy.get('#signupName').click();
    //   cy.get('#signupName').type('Mykhailo')
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');

    //   cy.get('#signupLastName').click();
    //   cy.get('#signupLastName').type('Vasiliev')
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');


    //   cy.get('#signupEmail').click();
    //   cy.get('#signupEmail').type('lolhawkeromg+test6@gmail.com')
    //   cy.get('[class="btn btn-primary"]').should('be.disabled')

    //   cy.get('#signupPassword').click();
    //   cy.get('#signupPassword').type('qwerasdf1Q')
    //   cy.get('[class="btn btn-primary"]').should('be.disabled');

    //   cy.get('#signupRepeatPassword').click();
    //   cy.get('#signupRepeatPassword').type('qwerasdf1Q')
    //   cy.get('[class="btn btn-primary"]').should('not.be.disabled');

    //   cy.get('[class="btn btn-primary"]').click();
    //   cy.contains('Garage').should('be.visible');

    // });

    it('Login as New User', () => {

      cy.login('lolhawkeromg+test6@gmail.com');

      cy.get('#signinPassword').type('qwerasdf1Q', { sensitive: true });

      cy.get('#remember').check;
      cy.get('[class="btn btn-primary"]').click();
      cy.contains('Garage').should('be.visible');

    });






//   it('Should find and verify the Sign Up button', () => {
//       cy.contains('Sign up').should('be.visible');
//   });

//   it('Should find all social media icons in the contacts section', () => {
//     const socialMediaSelectors = ['.socials_icon.icon.icon-facebook', '.socials_icon.icon.icon-telegram', '.socials_icon.icon.icon-youtube', '.socials_icon.icon.icon-instagram', '.socials_icon.icon.icon-linkedin'];
//     socialMediaSelectors.forEach(selector => {
//         cy.get(selector).should('be.visible');
//     });
// });

//   it('Should verify footer contact links', () => {
//       cy.contains('ithillel.ua').should('be.visible');
//       cy.contains('support@ithillel.ua').should('be.visible');
  // });
});




// describe('example to-do app', () => {
//   beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
  //   cy.visit('https://example.cypress.io/todo')
  // })

  // it('displays two todo items by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    // cy.get('.todo-list li').should('have.length', 2)

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
  //   cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
  //   cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  // })

  // it('can add new todo items', () => {
    // We'll store our item text in a variable so we can reuse it
    // const newItem = 'Feed the cat'

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
    // This input has a data-test attribute so we'll use that to select the
    // element in accordance with best practices:
    // https://on.cypress.io/selecting-elements
    // cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
  //   cy.get('.todo-list li')
  //     .should('have.length', 3)
  //     .last()
  //     .should('have.text', newItem)
  // })

  // it('can check off an item as completed', () => {
    // In addition to using the `get` command to get an element by selector,
    // we can also use the `contains` command to get an element by its contents.
    // However, this will yield the <label>, which is lowest-level element that contains the text.
    // In order to check the item, we'll find the <input> element for this <label>
    // by traversing up the dom to the parent element. From there, we can `find`
    // the child checkbox <input> element and use the `check` command to check it.
    // cy.contains('Pay electric bill')
    //   .parent()
    //   .find('input[type=checkbox]')
    //   .check()

    // Now that we've checked the button, we can go ahead and make sure
    // that the list element is now marked as completed.
    // Again we'll use `contains` to find the <label> element and then use the `parents` command
    // to traverse multiple levels up the dom until we find the corresponding <li> element.
    // Once we get that element, we can assert that it has the completed class.
    // cy.contains('Pay electric bill')
    //   .parents('li')
    //   .should('have.class', 'completed')
  // })

  // context('with a checked task', () => {
  //   beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
    //   cy.contains('Pay electric bill')
    //     .parent()
    //     .find('input[type=checkbox]')
    //     .check()
    // })

    // it('can filter for uncompleted tasks', () => {
      // We'll click on the "active" button in order to
      // display only incomplete items
      // cy.contains('Active').click()

      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      // cy.get('.todo-list li')
      //   .should('have.length', 1)
      //   .first()
      //   .should('have.text', 'Walk the dog')

      // For good measure, let's also assert that the task we checked off
      // does not exist on the page.
    //   cy.contains('Pay electric bill').should('not.exist')
    // })

    // it('can filter for completed tasks', () => {
      // We can perform similar steps as the test above to ensure
      // that only completed tasks are shown
    //   cy.contains('Completed').click()

    //   cy.get('.todo-list li')
    //     .should('have.length', 1)
    //     .first()
    //     .should('have.text', 'Pay electric bill')

    //   cy.contains('Walk the dog').should('not.exist')
    // })

    // it('can delete all completed tasks', () => {
      // First, let's click the "Clear completed" button
      // `contains` is actually serving two purposes here.
      // First, it's ensuring that the button exists within the dom.
      // This button only appears when at least one task is checked
      // so this command is implicitly verifying that it does exist.
      // Second, it selects the button so we can click it.
      // cy.contains('Clear completed').click()

      // Then we can make sure that there is only one element
      // in the list and our element does not exist
      // cy.get('.todo-list li')
      //   .should('have.length', 1)
      //   .should('not.have.text', 'Pay electric bill')

      // Finally, make sure that the clear button no longer exists.
//       cy.contains('Clear completed').should('not.exist')
//     })
//   })
// })
