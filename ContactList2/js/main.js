import $ from 'jquery'; //get jQuery object
import _ from 'underscore'; //get underscore object
import './ajax_setup'; //get ajax_setup
import People from './resources'
import Router from './router';

let $app = $('.app'); 
new Router($app).start();

let getContactForm = function(){
  let firstName = $('.firstName').val();
  let lastName = $('.lastName').val();
  let email = $('.email').val();
  let telephone = $('.telephone').val();
  let location = $('.location').val();


let addContact = new Person ({
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Telephone: telephone,
    Location: location  
  });

} //end of getContactForm


// import {People} from './resources';
// import {PeopleView} from './views';

// let people = new People();

// people.fetch().then(function() {

//   console.log('got data', people.toJSON());

//   let firstPerson = people.first();

//   $('body').html(
//     PeopleView(people.toJSON())
//   );

// });


