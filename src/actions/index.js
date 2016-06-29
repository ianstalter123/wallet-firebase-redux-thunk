import firebase from 'firebase';

const fire = require('firebase/app');
require('firebase/auth');
require('firebase/database')

const app = fire.initializeApp({
  apiKey: 'fFtcZUWBkkHFj699Jr489ojoE0eLwx1kBQ3Kt2JD',
  databaseURL: 'crackling-fire-8350.firebaseio.com'
});

const database = app.database();

const ref = database.ref('wallets');

export const GET_WALLETS = 'GET_WALLETS';

export const getWallets = () => (dispatch) => {
		ref.once('value', val => {
			dispatch({
				type: GET_WALLETS,
				wallets: val.val()
			});
		});
}
