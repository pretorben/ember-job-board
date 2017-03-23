import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('jobs', {path: '/jobs'});
  this.route('show', {path: '/jobs/:name'});
});

export default Router;
