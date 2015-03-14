'use strict';

var _ = require("underscore");
var React = require('react');
var Reflux = require('reflux');

var WizardStore   = require('../stores/wizardStore');
var HouseStore    = require('../stores/houseStore');
var WizardActions = require('../actions/wizardActions');
var HouseImages   = require('../views/houseImages.jsx');


var SortingHat = React.createClass({

  mixins: [Reflux.connect(WizardStore, 'wizard')],

  getInitialState: function() {
    this.props.houses = HouseStore.get();
    return {
      wizard: WizardStore.get()
    };
  },

  onSortToHouse: function(i) {
    console.log(WizardStore.get());
    if (this.state.wizard.house) { return; };
    var newWizard = React.addons.update(this.state, {
      wizard: {house: {$set: _.last(this.props.houses)}}
    })

    WizardActions.sortToHouse.preEmit = function() { console.log(arguments); };
    WizardActions.sortToHouse(newWizard);
    this.setState(newWizard)
  },

  render: function() {

    var classValuesForAssignedHouse = "alert alert-success"
      + (this.state.wizard.house ? '' : ' hidden');

    return(
<div>
  <div className="jumbotron">
    <h1>Welcome to Hogwarts, wizard!</h1>
    <p>Welcome to the wonderful world of hogwarts.  Click the sorting hat to discover which house you will be assigned to.</p>
  </div>
  <div className="panel">
    <div className="panel-body clearfix">
      <div className={classValuesForAssignedHouse}>You are assigned to {this.state.wizard.house || ''}!</div>
      <div className="pull-left" style={{paddingLeft: '10'}} >
        <img src="images/sorting-hat.jpg" style={{cursor: "pointer"}} onClick={this.onSortToHouse} />
        <HouseImages houses={this.props.houses} wizard={this.state.wizard} />
      </div>
    </div>
  </div>
</div>

    );
  }

});
        //<img style={{width:'180px', marginRight:'20px'}} src="images/gryffindor.jpg" alt="Gryffindor"/>
        //<img style={{width:'150px', marginRight:'20px'}} src="images/slytherin.jpg" alt="Slytherin"/>
        //<img style={{width:'170px', marginRight:'20px'}} src="images/ravenclaw.jpg" alt="Ravenclaw"/>
        //<img style={{width:'150px', marginRight:'20px'}} src="images/hufflepuff.jpg" alt="Hufflepuff"/>




module.exports = SortingHat;
