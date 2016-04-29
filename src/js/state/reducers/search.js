const search = (state = null, action) => {
	switch (action.type) {
		case 'SEARCH':
			return action.search
		default:
			return state
	}
};

export default search;