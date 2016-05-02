import data from '../data';

const carExists = (state, data) => {
	if (!state.length)
		return false;

	return state.reduce((a, b) => {
		if (a.placa === data.placa)
			return a;

		if (b.placa === data.placa)
			return b;

		return false;
	})
};

const editCar = (state, data) => {
	let map = current => {
		if (current.placa !== data.placa)
			return current;

		return Object.assign({}, data);
	};

	return state.map(map);
};

const car = (state, action) => {
	switch (action.type) {
		case 'SAVE_CAR':
			let exists = carExists(state, action.data);

			if (exists)
				return editCar(state, action.data);

			return [
				action.data,
				...state
			]
		case 'REMOVE_CAR':
			return state.filter((current) => action.placas.indexOf(current.placa) < 0);
		case 'SELECT_CAR':
			if ((state.placa !== action.placa ) && action.placa !== 'ALL')
				return state;

			return Object.assign({}, state, { selected: action.selected });
	}
};

const cars = (state = data, action) => {
	switch (action.type) {
		case 'SAVE_CAR':
		case 'REMOVE_CAR':
			return car(state, action)
		case 'SELECT_CAR':
			return state.map(current => car(current, action));
		default:
			return state
	}
};

export default cars;