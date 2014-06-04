var Router = Ember.Router.extend({
  location: 'history'
});

Router.map(function() {
  this.route('room', {path: 'room/:room_name'});
});

export default Router;
