export default Ember.Route.extend({
  model: function() {
    return this.store.find('message');
  },
  actions: {
    sendMessage: function(msg) {
      var appController = this.controllerFor('application');
      var nick = appController.get('nick');
      var time = new Date();
      
      var message = this.store.createRecord('message', {
        body: msg,
        nick: nick,
        time: time
      });
      message.save();
      var indexController = this.controllerFor('index');
      indexController.set('msg', '');
    }
  }
});
