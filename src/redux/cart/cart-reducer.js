import {CartActionTypes} from './cart-types';
import {addItemToCart, removeItemFromCart} from './cart.utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				// old/existing item and add news actions that triger
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				// decrease quantity adn remove item if last one
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case CartActionTypes.CLEAT_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					cartItem => cartItem.id !== action.payload.id
				),
			};
		default:
			return state;
	}
};

export default cartReducer;
