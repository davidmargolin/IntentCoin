export const enterApp = (key, index) => {
	return {
		type: 'ENTER_KEY',
		payload: key,
		index: index
	};
};

export const chooseRequest = index => {
	return {
		type: 'CHOOSE_REQUEST',
		payload: index
	};
};

export const chooseContract = key => {
	return {
		type: 'CHOOSE_CONTRACT',
		payload: key
	};
};
