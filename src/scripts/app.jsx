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


var Catalog = require('./views/catalog');
var SortingHat = require('./views/sortingHat');

//var userStore  = require('./stores/userStore');
//var actions    = require('./actions/actions');
//var Posts      = require('./views/posts');
//var SinglePost = require('./views/single');
//var Profile    = require('./views/profile');
//var UhOh       = require('./views/404');
//var Login      = require('./components/login');
//var Register   = require('./components/register');

var App = React.createClass({

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
<div>
<header>
<div className="navbar navbar-inverse">
    <div className="container">
        <div className="navbar-header">
            <a className="navbar-brand" href="#">Hogwarts</a>
        </div>
        <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li><Link to="sorting">Sorting</Link></li>
                <li><Link to="catalog">Catalog</Link></li>
            </ul>
        </div>
    </div>
</div>
</header>
  <RouteHandler/>
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
    <Route name="app" path="/" handler={App}>
      <DefaultRoute handler={SortingHat} />
      <Route name="catalog" handler={Catalog} />
      <Route name="sorting" handler={SortingHat} />
    </Route>
);

                //<li><Link to="schedule">Schedule</Link></li>
      //<Route name="Schedule" handler={Schedule} />

Router.run(routes, function(Handler) {
    //React.render(<Handler params={ state.params } />, document.getElementById('app'));
    React.render(<Handler />, document.body);
});

// fastclick eliminates 300ms click delay on mobile
attachFastClick(document.body);

