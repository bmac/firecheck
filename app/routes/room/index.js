export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor('room').get('messages');
  },
  actions: {
    sendMessage: function(msg) {
      var appController = this.controllerFor('application');
      var nick = appController.get('nick');
      var time = new Date();

      var message = this.store.createRecord('message', {
        body: msg,
        nick: nick,
        time: time,
        room: this.modelFor('room')
      });
      message.save();
      this.modelFor('room.index').pushObject(message).save();
      
      var indexController = this.controllerFor('room.index');
      indexController.set('msg', '');
    }
  }
});
