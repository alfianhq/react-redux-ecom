import {CartActionTypes} from './cart-types';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// add Item action
export const addItem = item => ({
	type: CartActionTypes.ADD_ITEM,
	// payload -> item that wil try to add
	payload: item,
});

export const removeItem = item => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item,
});

export const clearItemFromCart = item => ({
	type: CartActionTypes.CLEAT_ITEM_FROM_CART,
	payload: item,
});
