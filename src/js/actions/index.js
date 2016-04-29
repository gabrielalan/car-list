export const addCar = (data) => {
	return {
		type: 'ADD_CAR',
		data
	}
};

export const selectCar = (selected, placa) => {
	return {
		type: 'SELECT_CAR',
		placa,
		selected
	}
};

export const setSearch = (search) => {
	return {
		type: 'SEARCH',
		search
	}
};