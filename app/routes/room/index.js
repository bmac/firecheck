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

      var message = this.store.createRecord('message', {
        body: msg,
        nick: nick,
        time: time,
        //room: room
      });

      var messages = room.get('messages')//.then(function(messages) {
        messages.addRecord(message);
        room.save().then(function() {
          //message.save();
        });
      //});

      //debugger;
      // message.save().then(function() {
      //   var messages = this.modelFor('room.index');
      //   messages.addRecord(message);
      //   message.save();
      //   room.save();
      // }.bind(this));

      
      var indexController = this.controllerFor('room.index');
      indexController.set('msg', '');
    }
  }
});
