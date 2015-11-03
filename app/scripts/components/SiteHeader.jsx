var React = require('react');

module.exports = React.createClass({
 render: function() {
    return (
      <header className="SiteHeader">
	      <div className="ui inverted vertical masthead center aligned segment">
	        <div className="ui container">
	          <div className="ui large secondary inverted pointing menu">
	          	<div className="left item">
	          		<a className="item">jeffscottward</a>
	          	</div>
	            <div className="right item">
	            	<a className="active item">Blog</a>
	            	<a className="item">About</a>
	            	<a className="item">Talks</a>
	            	<a className="item">Code</a>	
	            </div>
	          </div>
	          
	        </div>
	      </div>
      </header>
    );
  }
});