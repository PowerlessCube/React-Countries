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

	//This is a function that React calls for us - this is how we hook up information for our APIs
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

	getBorderNames: function(){
		return ["Scotland", "Wales"]
		// TODO: go get country display borders
		// TODO: for each of those codes go and find the country in my country lists and get it's name. add the name to a new array and then return the matching country.
	},

	render: function() {
		var displayElement = <h4> No Country Selected </h4>
		if (this.state.displayCountry) {
			//when selected it passes the selected country to Countries Display

			var borders = this.getBorderNames();
			console.log(borders)
			displayElement =
			<CountryDisplay
				country={this.state.displayCountry}
				borders={borders}
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
