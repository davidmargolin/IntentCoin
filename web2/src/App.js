import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Campaign from './ethereum/campaign';
import factory from './ethereum/factory';
import web3 from './ethereum/web3';
import io from 'socket.io-client';
import firebase from 'firebase';

class App extends Component {
	state = {
		timestamp: 'no timestamp yet',
		started: false
	};
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
	}

	async componentDidMount() {
		const campaigns = await factory.methods.getDeployedCampaigns().call();

		const campaign = await Campaign(
			'0xF818C02861260B48a1b771eF91f1c74987876C3d'
		);

		let masterAccount = '0xb9A1b152D057d66719609cBAE415cf1DB8bec63D';

		//Get Amount of Requests
		const requestCount = await campaign.methods.getRequestsCount().call();

		//Get Amount Of Contributors
		const approversCount = await campaign.methods.approversCount().call();

		//Contribute to the campaign
		let account1 = '0x6A74130e400231B2c2E3cCed30577EB949D05750';
		let value = web3.utils.toWei('0.001', 'ether');
		// await campaign.methods.contribute().send({ from: account1, value });

		let recipient = '0x7d32B45fA00d38971c6b145C6Ad6fC76F954fE69';
		let value2 = '0.01';
		let description = 'We want to build a wall';

		// Create A Request
		// await campaign.methods
		// 	.createRequest(description, web3.utils.toWei(value2, 'ether'), recipient)
		// 	.send({ from: masterAccount });
		// console.log('Finishing Making A New Request')

		//Finalize a request
		//We need the request id number and the master account
		// await campaign.methods.finalizeRequest(this.props.id).send({
		//   from: master
		// });
		let eventRef = firebase.database().ref('events');
		eventRef.on('child_added', snapshot => {
			let data = snapshot.val();
			let { type } = data;
			if (this.state.started) {
				if (type === 'APPROVE') {
					this.approveRequest(data);
				}
			}
		});
	}

	//Approve A Request
	//We need the request id number and the person who is approving it
	approveRequest = async data => {
		console.log(data);
		// await campaign.methods.approveRequest(requestId).send({
		// 	from: accountKey
		// });
	};

	switch = () => {
		let { started } = this.state;
		this.setState({ started: !started });
		console.log('SWITCHING STATE');
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
					<button onClick={this.switch}>Trigger</button>
				</header>
				<p className="App-intro">
					{/* This is the timer value: {this.state.timestamp} */}
				</p>
			</div>
		);
	}
}

export default App;
