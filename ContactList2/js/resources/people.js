import Backbone from 'backbone';
import Person from './person';
import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({

  url: APP_URL,

  model: Person,

  // parse: function(data) {
  //   return data.results;
  // },

  parse(data) {
    return data.results;
  }
 
});
