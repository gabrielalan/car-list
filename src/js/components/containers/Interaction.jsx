import React from 'react';
import Toolbar from '../presentationals/Toolbar';
import store from '../../state/store';
import { setSearch } from '../../actions';

var Interaction = React.createClass({

	getSelectedNumbers() {
		return this.props.cars.map(current => current.selected ? 1 : 0).reduce((a, b) => a + b);
	},

	onSearch(search) {
		store.dispatch(setSearch(search));
	},

	render() {
		const qtd = this.getSelectedNumbers()

		return (<Toolbar editDisabled={qtd !== 1} removeDisabled={qtd <= 0} onSearch={this.onSearch} />);
	}
});

export default Interaction;