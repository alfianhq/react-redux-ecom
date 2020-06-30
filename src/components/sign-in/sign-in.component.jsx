import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoole} from '../../firebase/firebase.util';

import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		// signin
		const {email, password} = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email: '', password: ''});
		} catch (error) {
			console.log(error);
		}

		this.setState({email: '', password: ''});
	};

	handleChange = event => {
		const {value, name} = event.target;

		this.setState({[name]: value});
	};
	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your Email and Password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
						label='email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
						label='password'
						required
					/>

					<div className='buttons'>
						<CustomButton type='submit'>Sign In </CustomButton>
						<CustomButton onClick={signInWithGoole} isGoogleSignIn>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
