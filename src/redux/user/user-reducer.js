import {UserActionTypes} from './user-types';

// buat default state untuk pertama kalinya
const INITIAL_STATE = {
	currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				// apbila actionnya benasr (SET_CURRENT_USER) make
				// ambil state sebelumya tau yang sudah ada
				// lalu set state - sesuan dengan action payload
				...state,
				currentUser: action.payload,
			};
		// apabila actionya tidak sesuai maka
		// balik ke state
		default:
			return state;
	}
};

export default userReducer;
