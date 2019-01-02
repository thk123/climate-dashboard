const initialData = {
	data: [1982]
}

export default (state=initialData, action) => {
	switch(action.type) {
		case 'GET_TEST_DATA':
			console.log("data reducer")
			console.log(action.data)
			const finalState = {
				...state,
				data: action.data
			}
			console.log(finalState);
			return finalState;
		default:
			return state
	}
}
