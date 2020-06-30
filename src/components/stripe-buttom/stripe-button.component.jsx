import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
	// stripe value is cent so time 100
	const priceForStripe = price * 100;
	const PublishableKey = 'pk_test_WpQ8n06JlhZ1l95migoyNYXe00UNkr3mEr';

	const onToken = token => {
		console.log(token);
		alert('Payment Succesful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='HQ Clothing Ltd'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={PublishableKey}
		/>
	);
};

export default StripeCheckoutButton;
