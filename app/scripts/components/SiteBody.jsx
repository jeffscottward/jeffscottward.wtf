var React    = require('react');
var SiteAbout = require('./SiteAbout.jsx');

module.exports = React.createClass({
 render: function() {

 	// console.log(SiteAbout);

    return (
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
        <div className="ui container body-render"><SiteAbout/></div>
      </div>
    );
  }
});