var React = require('react');

module.exports = React.createClass({
 render: function() {
    return (
      <footer className="SiteFooter">
        <div className="ui inverted vertical footer segment">
            <div className="ui center aligned container">
              <div className="ui stackable inverted divided grid">
                <div className="sixteen wide column">
                  <h4 className="ui inverted header">Follow me... into the future</h4>
                  <br/>
                  <a href="https://twitter.com/jeffscottward" className="twitter-follow-button" data-show-count="false" data-size="large">Follow @jeffscottward</a>
                  <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                  <a href="https://github.com/jeffscottward"  className="github-button" data-style="mega" aria-label="Follow @jeffscottward on GitHub">Follow @jeffscottward</a>
                </div>
              </div>
              <div className="ui inverted section divider"></div>
              {/*<img src="assets/images/logo.png" className="ui centered mini image"/>*/}
              <div className="ui horizontal inverted small divided link list">
                <a className="item">Site Map</a>
                <a className="item">Contact Us</a>
                <a className="item">Terms and Conditions</a>
                <a className="item">Privacy Policy</a>
              </div>
            </div>
          </div>
      </footer>
    );
  }
});