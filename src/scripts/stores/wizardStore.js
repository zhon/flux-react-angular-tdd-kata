var Reflux=require('reflux');

var WizardActions=require('../actions/WizardActions');

var _wizard = {courses: {}, house: undefined };

var WizardStore = Reflux.createStore({

  init: function() {
    this.listenTo(WizardActions.sortToHouse, 'onChange');
    // Should this be a single course or [ courses ]
    //this.listenTo(WizardActions.editWizard, this.onEdit);
  },

  //onUpdateHouse?
  onChange: function(wizard) {
    console.log("onChange("+ wizard + ")");
    // house checking?
    _wizard = wizard;
    this.trigger(_wizard);
  },

  //onEdit: function(note) {
  //},

  get: function() {
    return _wizard;
  }

});

module.exports=WizardStore;
