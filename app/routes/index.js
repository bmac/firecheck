export default Ember.Route.extend({
  model: function() {
    return 'foo';
  },
  actions: {
    joinRoom: function(roomName) {
      this.transitionTo('room', roomName);
    }
  }
});
