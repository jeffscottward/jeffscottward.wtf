var React = require('react');

module.exports = React.createClass({
 render: function() {
    return (
      <header className="SiteHeader">
	      <div className="ui inverted vertical masthead center aligned segment">
	        <div className="ui container">
	          <div className="ui large secondary inverted pointing menu">
	            <a className="toc item">
	              <i className="sidebar icon"></i>
	            </a>
	            <a className="active item">Home</a>
	            <a className="item">Work</a>
	            <a className="item">Company</a>
	            <a className="item">Careers</a>
	          </div>
	        </div>
	      </div>
      </header>
    );
  }
});