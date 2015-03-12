var Reflux=require('reflux');

var WizardActions=require('../actions/WizardActions');

var _wizard = {courses: {}, house: undefined };

var WizardStore = Reflux.createStore({

  init: function() {
    this.listenTo(WizardActions.sortToHouse, this.onSort);
    // Should this be a single course or [ courses ]
    //this.listenTo(WizardActions.editWizard, this.onEdit);
  },

  //onUpdateHouse?
  onSort: function(house) {
    // house checking?
    _wizard.house = house;
    this.trigger(_wizard);
  },

  //onEdit: function(note) {
  //},

  get: function() {
    return _wizard;
  }

});

module.exports=WizardStore;
