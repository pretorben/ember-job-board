import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Chef', 'Full Stack Developer', 'Super Secret Agent', 'Burger Rotation Technician', 'Student'];
  }
});
