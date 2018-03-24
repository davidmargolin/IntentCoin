import * as firebase from 'firebase';

let config = {
	apiKey: 'AIzaSyDhAV5hjYWpyG-9YnCMq9XgVFON27o6SpE',
	authDomain: 'wombat-344c7.firebaseapp.com',
	databaseURL: 'https://wombat-344c7.firebaseio.com',
	projectId: 'wombat-344c7',
	storageBucket: 'wombat-344c7.appspot.com',
	messagingSenderId: '97936250813'
};

firebase.initializeApp(config);

const database = firebase.database();

export const getAndUpdateTripNumber = async uid => {
	return await database
		.ref(`Users/${uid}/trips`)
		.once('value')
		.then(snapshot => {
			database.ref(`Users/${uid}/trips`).set(snapshot.val() + 1);
			return snapshot.val() + 1;
		});
};

export const getSecretMessages = async () => {
	return await database
		.ref('Messages/SecretMessages/')
		.once('value')
		.then(snapshot => {
			return snapshot.val();
		});
};
export const setMessage = message => {
	database.ref(`Messages/Message1`).set(message);
};

export { database };
