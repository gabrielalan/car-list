export const saveCar = (data) => {
	return {
		type: 'SAVE_CAR',
		data
	}
};

export const removeCar = (placas) => {
	return {
		type: 'REMOVE_CAR',
		placas
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

export const setPage = (page) => {
	return {
		type: 'PAGE',
		page
	}
};