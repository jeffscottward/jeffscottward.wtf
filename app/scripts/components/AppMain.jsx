var React      = require('react');
var SiteBody   = require('./SiteBody.jsx');
var SiteFooter = require('./SiteFooter.jsx');

module.exports = React.createClass({
 render: function() {
    return (
      <div className="AppMain">
        <SiteBody/>
        <SiteFooter/>
      </div>
    );
  }
});