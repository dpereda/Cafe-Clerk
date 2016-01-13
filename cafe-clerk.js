Alertz = new Mongo.Collection('alertz');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    alertz: function () {
      return Alertz.find({}).fetch().reverse();
    }
  });

  Template.services.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.services.events({
    'click':function(event){
      var title = event.target.value;
        Alertz.insert({
          itemName: title,
          createdAt: new Date()
        });
    }

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Kadira.connect('RTi6ELMA72hyDwXcz', '96986865-9bf2-4deb-bbe5-9d2e35e34809');
  });
}
