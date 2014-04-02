export default DS.Model.extend({
  body: DS.attr('string'),
  nick: DS.attr('string'),
  time: DS.attr('date'),
  room: DS.belongsTo('room', { async: true })
});
