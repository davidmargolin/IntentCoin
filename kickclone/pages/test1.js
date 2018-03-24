import React, { Component } from 'react';
import firebase from 'firebase';
import ExploreList from '../components/ExploreList';
import Profile from '../components/Profile';
import NavBar from '../components/NavBar';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			health: [],
			edu: [],
			env: []
		};
	}
	componentWillMount() {
		let config = {
			apiKey: 'AIzaSyDhAV5hjYWpyG-9YnCMq9XgVFON27o6SpE',
			authDomain: 'wombat-344c7.firebaseapp.com',
			databaseURL: 'https://wombat-344c7.firebaseio.com',
			projectId: 'wombat-344c7',
			storageBucket: 'wombat-344c7.appspot.com',
			messagingSenderId: '97936250813'
		};
		try {
			firebase.initializeApp(config);
		} catch (err) {
			// we skip the "already exists" message which is
			// not an actual error when we're hot-reloading
			if (!/already exists/.test(err.message)) {
				console.error('Firebase initialization error', err.stack);
			}
		}

		let health_list = [];
		firebase
			.database()
			.ref('Health')
			.once('value', snapshot => {
				snapshot.forEach(childSnapshot => {
					let childData = childSnapshot.val();
					health_list.push(childData);
					this.setState({ health: health_list });
				});
			});
		let edu_list = [];
		firebase
			.database()
			.ref('Education')
			.once('value', snapshot => {
				snapshot.forEach(childSnapshot => {
					let childData = childSnapshot.val();
					edu_list.push(childData);
					this.setState({ edu: edu_list });
				});
			});
		let env_list = [];
		firebase
			.database()
			.ref('Environment')
			.once('value', snapshot => {
				snapshot.forEach(childSnapshot => {
					let childData = childSnapshot.val();
					env_list.push(childData);
					this.setState({ env: env_list });
				});
			});
	}
	render() {
		return (
			<div>
				<NavBar />

				<div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
					<Profile />
					<ExploreList
						education={this.state.edu}
						environment={this.state.env}
						health={this.state.health}
						style={{ margin: 'auto', display: 'flex' }}
					/>
				</div>
			</div>
		);
	}
}

export default HomePage;
