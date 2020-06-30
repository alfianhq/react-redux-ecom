import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth, createUserProfileDocument} from './firebase/firebase.util';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import SignInAndSignUpPage from './pages/signin-and-signup/SignInAndSignUpPage';
import CheckoutPage from './pages/checkout/checkoutpage';
import {setCurrentUser} from './redux/user/user-action';
import {selectCurrentUser} from './redux/user/user.selector';

import './App.css';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const {setCurrentUser} = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// update state base on snapshot
				userRef.onSnapshot(snapShot => {
					// pengganti this.setState
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

// get state
// distructure user reducer
const mapStateToProps = createStructuredSelector({
	// currentUser: state.user.currentUser -> kalau tidak dstructure tulisanya kaya gini
	currentUser: selectCurrentUser,
});

// set actions
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});

// passs null-> krena di app ini tadak membutuhkan state hanya set state
export default connect(mapStateToProps, mapDispatchToProps)(App);
