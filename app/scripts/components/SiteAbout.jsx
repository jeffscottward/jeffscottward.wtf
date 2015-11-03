var React = require('react');

module.exports = React.createClass({
 componentWillMount(){},
 render: function() {
    return (
      	<div className="SiteAbout">
      		<div className="ui main text container">
				<h2>Jeff Ward</h2>
				<iframe src="https://cdn.rawgit.com/jeffscottward/ethereum-logo-3d/master/index.html" width="220" height="600"></iframe>
				<div className="about-body">
					<h3>User Interface Engineer, Creative Technologist, Decentralized Futurist.</h3>
					<p>Jeff is constantly thinking about the future. The Internet of Things. Bitcoin. Decentralized Web 3.0. Full-stack Javascript. The world is moving ever faster towards the singularity and he hopes to be ready for it. </p>
					<p>Jeff got started as a graphic designer but had been teaching himself how to code since middle school with Flash, Visual Basic, and Java. He had a commodore 64 in his bedroom as a child. You could say he was born to work with computers. </p>
					<p>Email: <a href="jeffscottward@consensys.net">jeffscottward@consensys.net</a></p>
				</div>
			</div>
      	</div>
    );
  }
});