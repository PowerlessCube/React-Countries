var React = require('react');

var CountryDisplay = React.createClass({
	render: function() {
		return(
			//Receives the property from Countries Box 
			<h4>{this.props.country.name}</h4>
		)
	}
})

module.exports = CountryDisplay;
