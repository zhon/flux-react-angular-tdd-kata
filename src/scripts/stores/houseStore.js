'use strict';

var Reflux = require('reflux');

//var actions = require('../actions/actions');

  var _houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

var HouseStore = Reflux.createStore({

  get: function() {
    return _houses;
  }

});

module.exports=HouseStore;
