import Backbone from 'backbone';
import $ from 'jquery';

import {
  Person as PersonModel,
  People as PeopleCollection
} from './resources';

import {
  People as PeopleView, //views
  Person as PersonView, 
  Spinner,
  AddNew as AddNewView
} from './views';

export default Backbone.Router.extend({

  routes: {
    ""            : "redirectToPeople",
    "people"      : "showPeople",
    "person/:id"  : "showPerson",
    "addnew"      : "addNew"
  }, //end of routes

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new PeopleCollection();

    this.$el.on('click', '.person-list-item', (event) => {
      let $li = $(event.currentTarget);
      let personId = $li.data('person-id'); //data-person-id
      this.navigate(`person/${personId}`, {trigger: true});
    });

    this.$el.on('click', '.back-button', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');  //data-to="people"
      this.navigate(route, {trigger: true});
    });

    this.$el.on('click', '.add-user', (event) => {
      
      this.navigate("addnew", {trigger: true});
    });

    this.$el.on('click', '.addUser', (event) => {
      // console.log('submit');
      let firstName = $('.firstName').val();
      let lastName = $('.lastName').val();
      let email = $('.email').val();
      let telephone = $('.telephone').val();
      let location = $('.location').val();
      console.log(firstName, lastName, email);
      
      let newUser = new PersonModel ({
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Telephone: telephone,
      Location: location 
      }); //end of newUser
      console.log(newUser);

     });  //end of $el.on click .addUser
   
}, //end of initialize

  start() {
    Backbone.history.start();
    return this;
  }, //end of start()

  showSpinner() {
    this.$el.html( Spinner() );
  }, //end of showSpinner()

  redirectToPeople() {
    this.navigate('people', {
      replace: true,
      trigger: true
    });
  }, //end of redirectToPeople()

  showPeople() {
    this.showSpinner();

    // this.collection.fetch().then(function() {
    //   this is equivalent to below
    //   only below has `this` auto bound
    //   // `this` would be either null or window
    // });
    this.collection.fetch().then(() => {
      // `this` === the router instance

      this.$el.html(
        PeopleView(
          this.collection.toJSON()
        )
      );
    });
  }, //end of showPeople()

  showPerson(id) {
    let person = this.collection.get(id);

    if (person) {
      // we found the person from the collection
      this.$el.html(
        PersonView(
          person.toJSON()
        )
      );
    } else {
      this.showSpinner();
      person = this.collection.add({objectId: id});
      person.fetch().then(() => {
        this.$el.html(
          PersonView(
            person.toJSON()
          )
        );
      });
    }
  }, //end of showPerson(id)

  addNew() { 
    
    this.showSpinner();
    this.$el.html(
      AddNewView(
        ) //end of AddNewView
      ) //end $el.html
    
  } //end of addNew

}); //end of Backbone.Router.extend 
