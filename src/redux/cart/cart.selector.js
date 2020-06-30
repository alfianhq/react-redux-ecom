import {createSelector} from 'reselect';

// 2 types of selector
// 1- input selector that doesnt use create selector
// 2- output selector that does use input selector and creates selector to build themselves

// input selector
const selectCart = state => state.cart; //take all state(data) cart

export const selectCartItems = createSelector(
	// create selector have two argumen
	// 1 - collection
	[selectCart],
	// 2-functions that will return the value we want of the selector - out of value - like map/find/filter
	cart => cart.cartItems //output
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
	cartItems.reduce(
		(accumulatedQuantity, cartItem) =>
			accumulatedQuantity + cartItem.quantity * cartItem.price,
		0
	)
);
