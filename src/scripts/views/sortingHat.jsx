'use strict';


var SortingHat = React.createClass({

  _handleClick: function(i) {
    console.log("You clicked on " + i);
  },

  render: function() {

    var classValuesForAssignedHouse = "alert alert-success"
      + (this.props.assignedHouse ? '' : ' hidden');

    return(
<div>
  <div className="jumbotron">
    <h1>Welcome to Hogwarts, wizard!</h1>
    <p>Welcome to the wonderful world of hogwarts.  Click the sorting hat to discover which house you will be assigned to.</p>
  </div>
  <div className="panel">
    <div className="panel-body clearfix">
      <div className={classValuesForAssignedHouse}>You are assigned to {this.props.assignedHouse}!</div>
      <div className="pull-left" style={{paddingLeft: '10'}} >
        <img src="images/sorting-hat.jpg" style={{cursor: "pointer"}} />
      </div>
      <div className="well pull-left"  style={{ marginLeft: "50px", padding: "0 100px" }}>
        <img style={{width:'180px', marginRight:'20px'}} src="images/gryffindor.jpg" alt="Gryffindor"/>
        <img style={{width:'150px', marginRight:'20px'}} src="images/slytherin.jpg" alt="Slytherin"/>
        <img style={{width:'170px', marginRight:'20px'}} src="images/ravenclaw.jpg" alt="Ravenclaw"/>
        <img style={{width:'150px', marginRight:'20px'}} src="images/hufflepuff.jpg" alt="Hufflepuff"/>
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
