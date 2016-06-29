import { GET_WALLETS } from '../actions/index';

const initialState = {}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_WALLETS:
			const { wallets } = action;
			console.log('action received', action);
			// return Object.assign(
			// 	{},
			// 	state,
			// 	wallets
			// );
			return  { ...state, ...wallets }
	}
	return state;
}
