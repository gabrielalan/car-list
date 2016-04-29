const page = (state = 1, action) => {
	switch (action.type) {
		case 'PAGE':
			return action.page
		default:
			return state
	}
};

export default page;