var React = require('react');

var BorderingCountries = React.createClass({
	render: function() {
		var countryItems = this.props.borders.map(function(border) {
			return <p key={border}> border </p>
		})
		return(
			<div>
				<h4>Bordering Countries</h4>
				{this.props.borders}
			</div>
		)
	}
});

module.exports = BorderingCountries;
