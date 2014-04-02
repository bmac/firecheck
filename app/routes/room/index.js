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

      var message = this.store.createRecord('message', {
        body: msg,
        nick: nick,
        time: time,
        room: this.modelFor('room')
      });
      //debugger;
      message.save().then(function() {
        var messages = this.modelFor('room.index');
        messages.addRecord(message);
        message.save();
      }.bind(this));

      
      var indexController = this.controllerFor('room.index');
      indexController.set('msg', '');
    }
  }
});
