var React = require('react');
var CountriesSelector = require('./CountriesSelector');
var CountryDisplay = require('./CountriesDisplay');

var CountriesBox = React.createClass({

	getInitialState: function() {
		return {countries: [], displayCountry: null}
	},

	setDisplayCountry: function(country) {
		this.setState({ displayCountry: country });
	},

	componentDidMount: function() {
		console.log('CDM was called');
		var url = "https://restcountries.eu/rest/v1/all";
		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.onload = function() {
			var data = JSON.parse( request.responseText );
			this.setState({ countries: data });
		}.bind(this)
		request.send();
	},

	getBorderingCountries: function() {
		var borderingCountries = this.state.displayCountry.borders.map(function(border) {
			// TODO: find the country that has the same alpha 3 code as the border.
			return this.state.countries.find(function(country) {
				return country.alpha3Code === border
			})
		}.bind(this))
		return borderingCountries;
	},

	render: function() {
		var displayElement = <h4> No Country Selected </h4>
		if (this.state.displayCountry) {
			displayElement =
			<CountryDisplay
				country={this.state.displayCountry}
				borderingCountries={this.getBorderingCountries()}
			/>
		}
		return(
			<div className="main">
				<h4>Countries Box</h4>
				<CountriesSelector
					countries={this.state.countries}
					onSelectCountry={this.setDisplayCountry}
				/>
			{ displayElement }
			</div>
		)
	}
});

module.exports = CountriesBox
