'use strict';


var Catalog = React.createClass({

  render: function() {

    var divStyle = {
      padding: '0 20px'
    };

    return (
<div>
  <div className="jumbotron">
      <h1>Hogwarts course catalog!</h1>
      <p>Select your wizarding classes!</p>
  </div>
  <div>
      <div className="panel panel-default" style={divStyle}>
          <div ng-show="response && response success" className="alert alert-success">Successfully registered</div>
          <div ng-show="response && !response success" className="alert alert-danger">TODO response message</div>

          <table className="table">
              <thead>
                  <tr>
                      <th>Class</th>
                      <th>Time</th>
                      <th>Professor</th>
                      <th>Credits</th>
                  </tr>
              </thead>

              <tbody>
              </tbody>

          </table>
      </div>
  </div>
</div>

    )


  }

});

module.exports = Catalog;
