import {UserActionTypes} from './user-types';

export const setCurrentUser = user => ({
	// action.type
	type: UserActionTypes.SET_CURRENT_USER,
	// action.payload
	payload: user,
});
