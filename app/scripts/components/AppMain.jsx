var React      = require('react');
var SiteHeader    = require('./SiteHeader.jsx');
var SiteBody   = require('./SiteBody.jsx');
var SiteFooter = require('./SiteFooter.jsx');

module.exports = React.createClass({
 render: function() {
    return (
      <div className="AppMain">
      	<SiteHeader/>
        <SiteBody/>
        <SiteFooter/>
      </div>
    );
  }
});