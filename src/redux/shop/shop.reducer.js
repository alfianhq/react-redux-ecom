import SHOP_DATA from './shop.data';

const INITITAL_STATE = {
	collections: SHOP_DATA,
};

const shopReducer = (state = INITITAL_STATE, actions) => {
	switch (actions.type) {
		default:
			return state;
	}
};

export default shopReducer;
