import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Campaign from './ethereum/campaign';
import factory from './ethereum/factory';
import web3 from './ethereum/web3';
import io from 'socket.io-client';
import firebase from 'firebase';

let masterAccount = '0xb9A1b152D057d66719609cBAE415cf1DB8bec63D';

const masterList = [
	'0xa223e2545085ded0f0aca73ccb6571c851b2bc65',
	'0xba317fdc4417317529c30ab29104ab2783e12476',
	'0x0a2d48e7adb7abe9238ce2527b678997e814b7e4'
];

const accounts = [
	'0x6A74130e400231B2c2E3cCed30577EB949D05750',
	'0x0D1AA50D2fBa30B9835b1C82a15D12743a27c975',
	'0xdEBb73bD939cda799570D4aF51EaffF2FeEF03f8'
];

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

		const campaign = await Campaign(masterList[0]);

		//Get Amount of Requests
		console.log(await campaign.methods);
		const requestCount = await campaign.methods.getRequestsCount().call();

		//Get Amount Of Contributors
		// const approversCount = await campaign.methods.approversCount().call();

		let eventRef = firebase.database().ref('events');
		eventRef.on('child_added', snapshot => {
			let data = snapshot.val();
			let { type } = data;
			if (this.state.started) {
				if (type === 'APPROVE') {
					this.approveRequest(campaign, data);
				} else if (type === 'FINALIZING') {
					this.finalizeRequest(data);
				} else if (type === 'CREATING') {
					this.createRequest(data);
				}
			}
		});

		// this.contributeToCampaign(campaign, accounts[0]);
	}

	//Contribute to the campaign
	contributeToCampaign = async (campaign, account) => {
		let value = web3.utils.toWei('0.02', 'ether');
		await campaign.methods.contribute().send({ from: account, value });
	};
	// Create A Request
	createRequest = async data => {
		let { requestId } = data;
		// await campaign.methods
		// 	.createRequest(description, web3.utils.toWei(value2, 'ether'), recipient)
		// 	.send({ from: masterAccount });
		// console.log('Finishing Making A New Request')
	};

	//Finalize a request
	//We need the request id number and the master account
	finalizeRequest = async data => {
		console.log('Finalizing A Request');
		let { requestId } = data;
		// await campaign.methods.finalizeRequest(requestId).send({
		//   from: masterAccount
		// });
	};

	//Approve A Request
	//We need the request id number and the person who is approving it
	approveRequest = async (campaign, data) => {
		let { requestId, user } = data;
		console.log('WE ARE ABOUT TO APPROVE REQUEST WITH DATA', data);
		await campaign.methods.approveRequest(requestId).send({
			from: user
		});
	};

	switch = () => {
		let { started } = this.state;
		this.setState({ started: !started });
		console.log('SWITCHING STATE TO', !started);
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
