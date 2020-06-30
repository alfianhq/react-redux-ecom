export const addItemToCart = (cartItems, cartItemToAdd) => {
	// chcek apakah cartitem sudah ada
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	// if match set quantity
	// if not undefined -> return original caritem
	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? {...cartItem, quantity: cartItem.quantity + 1}
				: cartItem
		);
	}

	// if not found -> retrun existing cartItem, cartItemToAdd dan quntity 1
	return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

// decrease item and remove item if last one
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToRemove.id
	);

	// apabila tinggal 1 - remove
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
	}

	// more than 1 - minus 1
	return cartItems.map(cartItem =>
		cartItem.id === cartItemToRemove.id
			? {...cartItem, quantity: cartItem.quantity - 1}
			: cartItem
	);
};
