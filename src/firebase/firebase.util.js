import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBimd4yalAGzWmBOIQIVZmG2-2aZWpMo3c',
	authDomain: 'ecom-tes.firebaseapp.com',
	databaseURL: 'https://ecom-tes.firebaseio.com',
	projectId: 'ecom-tes',
	storageBucket: 'ecom-tes.appspot.com',
	messagingSenderId: '1093474482701',
	appId: '1:1093474482701:web:cbbcf23b0b8aba5d32b344',
};

// take user auth and store to database
export const createUserProfileDocument = async (userAuth, additionalData) => {
	// check is user not login
	if (!userAuth) return;

	const userRef = firestore.doc(`user/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const {displayName, email} = userAuth;
		const creadeAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				creadeAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

// setup Google Aut
export const auth = firebase.auth();

// Google Firestore
export const firestore = firebase.firestore();

// setup google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoole = () => auth.signInWithPopup(provider);

export default firebase;
