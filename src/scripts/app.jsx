'use strict';

//var $ = jQuery;
window.React = require('react/addons');
var Reflux   = require('reflux');

var attachFastClick = require('fastclick');

var Router        = require('react-router');
var RouteHandler  = Router.RouteHandler;
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;
var Link          = Router.Link;

//var userStore  = require('./stores/userStore');
//var actions    = require('./actions/actions');
//var Posts      = require('./views/posts');
//var SinglePost = require('./views/single');
//var Profile    = require('./views/profile');
//var UhOh       = require('./views/404');
//var Login      = require('./components/login');
//var Register   = require('./components/register');

var ReactNews = React.createClass({

    mixins: [
        require('react-router').Navigation,
        //Reflux.listenTo(userStore, 'onStoreUpdate'),
        //Reflux.listenTo(actions.goToPost, 'goToPost')
    ],

    getInitialState: function() {
      return null;
    },


    componentDidMount: function() {
    },

    render: function() {
        var userArea;

        return (
<div class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Hogwarts</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a ui-sref="sorting">Sorting</a></li>
                <li><a ui-sref="catalog">Catalog</a></li>
                <li><a ui-sref="schedule">Schedule</a></li>
            </ul>
        </div>
    </div>

</div>
        );
    }
});
                //<main id="content" className="full-height inner">
                    //<RouteHandler { ...this.props } user={ this.state.user } />
                //</main>

        //<Route name="profile" path="user/:username" handler={ Profile } />
        //<Route name="posts" path="/posts/:pageNum" handler={ Posts } ignoreScrollBehavior />
        //<Route name="404" path="/404" handler={ UhOh } />
        //<DefaultRoute name="home" handler={ Posts } />
var routes = (
    <Route handler={ ReactNews }>
    </Route>
);


Router.run(routes, function(Handler, state) {
    React.render(<Handler params={ state.params } />, document.getElementById('app'));
});

// fastclick eliminates 300ms click delay on mobile
attachFastClick(document.body);
