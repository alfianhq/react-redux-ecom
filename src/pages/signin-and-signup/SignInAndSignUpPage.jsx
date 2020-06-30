import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './signinandsignup.styles.scss';
import SignUp from '../../components/sign-up/sign-up.component';

const SigninAndSignupPage = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
);

export default SigninAndSignupPage;
