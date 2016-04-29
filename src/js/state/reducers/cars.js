import data from '../data';

const car = (state, action) => {
	switch (action.type) {
		case 'SELECT_CAR':
			if ((state.placa !== action.placa ) && action.placa !== 'ALL')
				return state;

			return Object.assign({}, state, { selected: action.selected });
	}
};

const cars = (state = data, action) => {
	switch (action.type) {
		case 'ADD_CAR':
			return state
		case 'SELECT_CAR':
			return state.map(current => car(current, action));
		default:
			return state
	}
};

export default cars;