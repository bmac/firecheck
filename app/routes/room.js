export default Ember.Route.extend({
  model: function(params) {
    return this.store.findOrCreate('room', {name: params.room_name});
  }
});

