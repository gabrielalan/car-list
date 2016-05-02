import React from 'react';
import Toolbar from '../presentationals/Toolbar';
import store from '../../state/store';
import { saveCar, removeCar, setSearch } from '../../actions';
import CarForm from './CarForm';

var Interaction = React.createClass({

	getInitialState() {
		return {
			openedModal: false
		}
	},

	getSelectedNumbers(props) {
		let cars = (props || this.props).cars;

		if( !cars || !cars.length )
			return 0;

		return cars.map(current => current.selected ? 1 : 0).reduce((a, b) => a + b);
	},

	getCurrentSelected() {
		return this.props.cars.reduce((a, b) => a.selected ? a : b.selected ? b : false);
	},

	getSelecteds() {
		return this.props.cars.filter(current => current.selected);
	},

	onSearch(search) {
		store.dispatch(setSearch(search));
	},

	onAdd() {
		this.refs.modal.setValues({
			fuel: 'Flex',
			image: '',
			mark: '',
			model: '',
			placa: '',
			value: ''
		});

		this.setState({
			openedModal: true
		});
	},

	onRemove() {
		let selecteds = this.getSelecteds().map(current => current.placa);

		store.dispatch(removeCar(selecteds))
	},

	onEdit() {
		let selected = this.getCurrentSelected();

		if (!selected)
			return false;

		this.refs.modal.setValues({
			fuel: selected.combustivel,
			image: selected.imagem,
			mark: selected.marca,
			model: selected.modelo,
			placa: selected.placa,
			value: selected.valor
		});

		this.setState({
			openedModal: true
		});
	},

	shouldComponentUpdate(nextProps, nextState) {
		const selectedChange = this.getSelectedNumbers() !== this.getSelectedNumbers(nextProps);

		return ( nextState.openedModal !== this.state.openedModal ) || selectedChange;
	},

	onHideModal() {
		this.setState({
			openedModal: false
		})
	},

	getModalHandlers() {
		return {
			'hide.bs.modal': this.onHideModal
		}
	},

	onSubmit(data) {
		store.dispatch(saveCar(data));

		this.setState({
			openedModal: false
		})
	},

	render() {
		const qtd = this.getSelectedNumbers()

		return (<div className="app-interaction-wrapper">
			<Toolbar editDisabled={qtd !== 1} removeDisabled={qtd <= 0} onSearch={this.onSearch} onAdd={this.onAdd} onEdit={this.onEdit} onRemove={this.onRemove} />
			<CarForm ref="modal" show={this.state.openedModal} events={this.getModalHandlers()} onSubmit={this.onSubmit} />
		</div>);
	}
});

export default Interaction;