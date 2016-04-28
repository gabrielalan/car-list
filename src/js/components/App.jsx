import React from 'react';
import Header from './Header';
import Toolbar from './Toolbar';
import Table from './Table';
import Pagination from './Pagination';

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