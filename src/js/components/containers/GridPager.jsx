import React from 'react';
import Grid from './Grid';
import Pagination from '../presentationals/Pagination';

const PAGE_MAX = 5;

var GridPager = React.createClass({

	// make a range
	range(n) {
		return Array.apply(null,Array(n)).map((x,i) => i);
	},

	getPages(cars) {
		return Math.ceil(cars.length/5);
	},

	getPaged(cars, pages) {
		return this.range(pages).map((x,i) => cars.slice(i*5,i*5+5));
	},

	getPage() {
		return Number(this.props.page);
	},

	getPaginationData(page) {
		return this.getPaged(this.props.cars)[page - 1];
	},

	render() {
		let currentPage = this.getPage(),
			pages = this.getPages(this.props.cars),
			data = this.getPaged(this.props.cars, pages),
			cars = data[currentPage - 1],
			search = this.props.search;

		return (<div className="app-grid-pager">
			<Grid cars={cars} search={search} />
			<Pagination pages={pages} page={currentPage} />
		</div>);
	}
});

export default GridPager;