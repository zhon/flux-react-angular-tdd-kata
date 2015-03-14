'use strict';

var React = require('react');

var HouseImages = React.createClass({

  render: function() {
    var self = this;
    console.log(this.props.selectedHouse)
    return (
      <span>
        {
          this.props.houses.map(function(item) {
            return (
              <img src={ "images/" +  item.toLowerCase()  + ".jpg"}
                alt={item}
                height="200"
                width="200"
                key={item}
                style={self.props.wizard.house == item ? {border:"4px solid brown"} : null }
                />
            )
          })
        }
      </span>
    )
  }

});

module.exports = HouseImages;
