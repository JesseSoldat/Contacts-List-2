import $ from 'jquery'; //get jQuery object
import _ from 'underscore'; //get underscore object
import './ajax_setup'; //get ajax_setup

import Router from './router';

let $app = $('.app'); 
new Router($app).start();

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

