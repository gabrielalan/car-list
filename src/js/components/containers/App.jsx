import React from 'react';
import Header from '../presentationals/Header';
import Interaction from './Interaction';
import Grid from './Grid';
import Pagination from '../presentationals/Pagination';

var App = React.createClass({

	render() {
		const cars = this.props.data.cars;

		return (<div className="app-container">
			<Header />

			<div className="app-padder">
				<Interaction cars={cars} />
				<Grid cars={cars} search={this.props.data.search} />
				<Pagination />
			</div>
		</div>);
	}
});

export default App;