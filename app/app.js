import Resolver from 'ember/resolver';
DS.Store.reopen({
  findOrCreate: function(model, params) {
    return this.find(model).then(function(records) {
      var filteredRecords = records.filter(function(record) {
        return params.name === record.get('name');
      });
      var record = filteredRecords.objectAt(0);
      if (!record) {
        throw new Error('Could not find a record for ' +  model + ' with ' + JSON.stringify(params));
      }
      return record;
    }).catch(function() {
      var record = this.createRecord(model, params);
      return record.save();
    }.bind(this));
  }
});

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  // LOG_TRANSITIONS: true,
  // LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'firecheck', // TODO: loaded via config
  Resolver: Resolver
});

export default App;
