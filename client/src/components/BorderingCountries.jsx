var React = require('react');

var BorderingCountries = React.createClass({
	render: function() {
		var borderItems = this.props.borders.map(function(border) {
			return(
				<div key={border.alpha3Code}>
					<h4> {border.name} </h4>
					{border.population}
				</div>
			)
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
