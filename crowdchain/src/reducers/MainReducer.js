const MainReducerDefaultState = {
	userKey: '',
	contractKey: '',
	requestIndex: null,
	userIndex: 0
};

export default (state = MainReducerDefaultState, action) => {
	switch (action.type) {
		case 'ENTER_KEY':
			return {
				...state,
				userKey: action.payload,
				userIndex: action.index
			};
		case 'CHOOSE_CONTRACT':
			return {
				...state,
				contractKey: action.payload
			};
		case 'CHOOSE_REQUEST':
			return {
				...state,
				requestIndex: action.payload
			};
		default:
			return state;
	}
};
