var React = require('react')

var CountriesSelector = React.createClass({
	getInitialState: function() {
		return { selectedIndex: null }
	},

	//gets the value of the new select, and then sets the state.
	handleChange: function(e) {
		e.preventDefault();
		var newIndex = e.target.value;
		this.setState({ selectedIndex: newIndex });
		var selectedCountry = this.props.countries[ newIndex ];
		this.props.onSelectCountry( selectedCountry );
	},

	render: function() {
		//populates our selector with options of countries names
		var options = this.props.countries.map( function(country, index) {
			return <option value={index} key={country.alpha2Code}> {country.name} </option>
		});

		//Puts the options in the selector and has an index value and an 'onchange' event.
		return(
			<select value={this.state.selectedIndex} onChange={ this.handleChange }>
				{options}
			</select>
		)
	}

});

module.exports = CountriesSelector;
