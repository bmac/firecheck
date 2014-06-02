var Router = Ember.Router.extend({
  location: 'history'
}); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('room', {path: 'room/:room_name'});
});

export default Router;
