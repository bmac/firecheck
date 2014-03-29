var ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://intense-fire-6326.firebaseio.com/')
});

export default ApplicationAdapter;
