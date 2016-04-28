import React from 'react';
import Header from '../presentationals/Header';
import Toolbar from '../presentationals/Toolbar';
import Table from '../presentationals/Table';
import Pagination from '../presentationals/Pagination';

var App = React.createClass({

	render() {
		return (<div className="app-container">
			<Header />

			<div className="app-padder">
				<Toolbar />
				<Table />
				<Pagination />
			</div>
		</div>);
	}
});

export default App;