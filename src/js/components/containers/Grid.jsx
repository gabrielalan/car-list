import React from 'react';
import Table from '../presentationals/Table';
import store from '../../state/store';
import { selectCar } from '../../actions';

var Grid = React.createClass({

	filterBySearch() {
		let filter = this.props.search;

		if (!filter)
			return this.props.cars;

		return this.props.cars.filter(current => current.combustivel.match(new RegExp(filter, 'gi')) || current.marca.match(new RegExp(filter, 'gi')));
	},

	getVisibleCars() {
		return this.filterBySearch();
	},

	onSelect(checked, placa) {
		store.dispatch(selectCar(checked, placa))
	},

	getAllSelected(cars) {
		if( !cars || !cars.length )
			return false;

		return cars.map(current => current.selected).reduce((a, b) => a && b);
	},

	render() {
		const cars = this.getVisibleCars();

		return (<Table list={cars} onSelect={this.onSelect} allSelected={this.getAllSelected(cars)} />);
	}
});

export default Grid;