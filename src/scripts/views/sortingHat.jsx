
'use strict';


var SortingHat = React.createClass({

  render: function() {
    return (
<div>
  <div className="jumbotron">
      <h1>Welcome to Hogwarts, wizard!</h1>
      <p>Welcome to the wonderful world of hogwarts.  Click the sorting hat to discover which house you will be assigned to.</p>
  </div>
  <div className="panel">

      <div className="panel-body clearfix">
        <div ng-show="assignedHouse" className="alert alert-success">You are assigned to {{assignedHouse}}!</div>
          <div className="pull-left" style="padding-left: 10px" >
              <img src="wizard/img/sorting-hat.jpg" style={{cursor: "pointer"}} ng-click="sort()" />
          </div>
          <div className="well pull-left"  style={{ 'margin-left': "50px", padding: "0 100px" }}>
              <img style="width:180px; margin-right:20px;" ng-className="getClassForHouse('Gryffindor')" src="wizard/img/gryffindor.jpg"/>
              <img style="width:150px; margin-right:20px;" ng-class="getClassForHouse('Slytherin');" src="wizard/img/slytherin.jpg"/>
              <img style="width:170px; margin-right:20px;" ng-class="getClassForHouse('Ravenclaw');" src="wizard/img/ravenclaw.jpg"/>
              <img style="width:150px; margin-right:20px;" ng-class="getClassForHouse('Hufflepuff');" src="wizard/img/hufflepuff.jpg"/>
          </div>
      </div>
  </div>

</div>
    );

  }

});

  //<style>
  //.selectedHouse{
    //border: 4px solid brown;
  //}
  //</style>

module.exports = SortingHat;
