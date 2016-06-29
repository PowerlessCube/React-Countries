var React = require('react');

var CountryDisplay = React.createClass({
	render: function() {
		// var displayBorderElement = <h3> Bordering Countries </h3>
		// if (this.state.displayCountry.borders.length != 0) {
		// 	displayBorderElement
		// }

		var listItems = this.props.borders.map( function(country, index) {
			return <li key={index}> {country} </li>
		});

		return(
			//Receives the property from Countries Box
			<div className="display-country-info">
				<div>
					<h3>{this.props.country.name}</h3>
					<ul>
						<li className="country-info">Native Name: {this.props.country.nativeName}</li>
						<li className="country-info">Capital City: {this.props.country.capital}</li>
						<li className="country-info">Population: {this.props.country.population}</li>
					</ul>
				</div>

				<div className="border-country">
					<h3>Bordering Countries</h3>
					<ul>
						{listItems}
					</ul>
				</div>
			</div>
		)
		// TODO: Create a new sub component of CountryDisplay, displaying the codes of the bordering countries.
	}
})

module.exports = CountryDisplay;
