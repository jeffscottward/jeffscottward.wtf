// Modules
var React      = require('react');
var Classnames = require('classnames');

// Pages
var SiteBlog  = require('./SiteBlog.jsx');
var SiteAbout = require('./SiteAbout.jsx');
var SiteTalks = require('./SiteTalks.jsx');

// Body Container
module.exports = React.createClass({

 getInitialState: function() {
  return { currentItem: 'blog' }
 },

 navigateSite: function(obj, clickedItem) {
  this.setState({
    currentItem: clickedItem.target.textContent.toLowerCase()
  })
 },

 render: function() {

    var self             = this;
    var navClasses       = Classnames(this.state.currentItem, 'item');
    var navListItems     = ['Talks','About','Blog'];
    var navListItemsHTML = [];

    var navList = function() {
      
      for (var i = navListItems.length - 1; i >= 0; i--) {

        navClasses.split(' ')[0].toLowerCase() === navListItems[i].toLowerCase() ?
          navListItemsHTML.push(
              <a className={"active item " + navListItems[i].toLowerCase()} 
                 key={navListItems[i].toLowerCase()}>
                   {navListItems[i]}
              </a>
          ) :

          navListItemsHTML.push(
            <a className={"item " + navListItems[i].toLowerCase()} 
               key={navListItems[i].toLowerCase()}
               onClick={self.navigateSite.bind(null, this)}>
                 {navListItems[i]}
            </a>
          );  
      };  
    }

    navList();

    console.log(this.state.currentItem);

    return (
      <div>
        <header className="SiteHeader">
          <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui container">
              <div className="ui large secondary inverted pointing menu">
                <div className="left item"><a className="item">jeffscottward.wtf</a></div>
                <div className="right item">{navListItemsHTML}</div>
              </div>
            </div>
          </div>
        </header>
        <div className="SiteBody">
          <div className="ui inverted vertical masthead center aligned segment">
          	<div className="banner">
  	            <div className="ui text container">
  	              <h1 className="ui inverted header">Winning The Future</h1>
  	            </div>
  	            <div className="ui background container">
  	            	<div className="ui background image"></div>
  	            </div>
  	        </div>
          </div>
          <div className="ui inverted vertical segment body-divider"></div>
          <div className="ui container body-render">
            {this.state.currentItem === 'blog'  ?  <SiteBlog/> : null }
            {this.state.currentItem === 'about' ? <SiteAbout/> : null }
            {this.state.currentItem === 'talks' ? <SiteTalks/> : null }
          </div>
        </div>
      </div>
    );
  }
});