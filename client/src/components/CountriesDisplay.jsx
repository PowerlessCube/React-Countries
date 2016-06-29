var React = require('react');
var BorderingCountries = require('./BorderingCountries')

var CountryDisplay = React.createClass({
	render: function() {

		return(
			//Receives the property from Countries Box
			<div className="display-country-info">
				<h3>{this.props.country.name}</h3>
				<ul>
					<li className="country-info">Native Name: {this.props.country.nativeName}</li>
					<li className="country-info">Capital City: {this.props.country.capital}</li>
					<li className="country-info">Population: {this.props.country.population}</li>
				</ul>
				<BorderingCountries
					borders={this.props.country.borders}
				/>
			</div>
		)
	}
})

module.exports = CountryDisplay;
