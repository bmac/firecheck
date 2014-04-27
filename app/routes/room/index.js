export default Ember.Route.extend({
  model: function(params) {
    window.room = this.modelFor('room');
    return this.modelFor('room').get('messages');
  },
  actions: {
    sendMessage: function(msg) {
      var appController = this.controllerFor('application');
      var nick = appController.get('nick');
      var time = new Date();
      var room = this.modelFor('room');

      room.get('messages').createRecord({
        body: msg,
        nick: nick,
        time: time
      });
      room.save();

      var indexController = this.controllerFor('room.index');
      indexController.set('msg', '');
    }
  }
});
