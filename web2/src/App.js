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
	'0x1b6007f93a4c1af2f82df7f05f46779062d97007',
	'0x1d823259964e4d4fdba1e079314ff6084399b39a',
	'0x14ce806d6749237a09117f56dc038e452d1c3eff'
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
				} else if (type === 'FINALIZE') {
					this.finalizeRequest(data);
					// this.finalizeRequest(data);
				}
			}
		});
	}

	contributeToEachCampaign = async () => {
		let value = web3.utils.toWei('0.31', 'ether');
		let account = '0x0D1AA50D2fBa30B9835b1C82a15D12743a27c975';
		const campaign1 = await Campaign(masterList[0]);
		const campaign2 = await Campaign(masterList[1]);
		const campaign3 = await Campaign(masterList[2]);

		await campaign1.methods.contribute().send({ from: account, value });
		await campaign2.methods.contribute().send({ from: account, value });
		await campaign3.methods.contribute().send({ from: account, value });
	};

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
	finalizeRequest = async ({ campaign, requestId, account }) => {
		console.log('Finalizing A Request');

		// Initialize the campaign from the campaign address in the data
		console.log(requestId, account, campaign);
		const newCampaign = await Campaign(campaign);

		await newCampaign.methods.finalizeRequest(requestId).send({
			from: account
		});
	};

	//Approve A Request
	//We need the request id number and the person who is approving it
	approveRequest = async (campaign, data) => {
		let { requestId, user } = data;

		//accounts[0] == David/Derran
		//accounts[1] == John
		//accounts[2] == Srinvas
		if (user == accounts[1]) {
			console.log('WE ARE ABOUT TO APPROVE REQUEST WITH DATA', data);
			await campaign.methods.approveRequest(requestId).send({
				from: user
			});
		}
	};

	switch = () => {
		let { started } = this.state;
		this.setState({ started: !started });
		console.log('SWITCHING STATE TO', !started);
	};

	resetStuffOnFirebase = () => {
		let ircRef = firebase.database().ref('Environment/3/intents');
		let dwbRef = firebase.database().ref('Health/1/intents');
		let bernieRef = firebase.database().ref('Policy/0/intents');

		let ircData = [
			{
				amount: '$2,000,000',
				approvals: 0,
				contributors: [0, 0, 0],
				goal_desc:
					'Due to an increase of flu contaminated zones, we want to purchase an additional supply of immunization treatments. Full lump sum will go towards a bulk order purchase from DVCare Pharma.',
				goal_name: 'Influenza Vaccinations',
				issued_to: 'Hospitals, Red Cross Teams',
				redeemed: false
			},
			{
				amount: '$4,200,000',
				approvals: 0,
				contributors: [0, 0, 0],
				goal_desc:
					'As we ramp up our efforts to repair Puerto Rico, we ask for funds towards generators, power tools, and other general items that will be dispersed throughout the region.',
				goal_name: 'Supplies for Puerto Rico',
				issued_to: 'House Relief Projects',
				redeemed: false
			},
			{
				amount: '$2,200,000',
				approvals: 0,
				contributors: [0, 0, 0],
				goal_desc:
					'More and more people are suffering from the crisis of totalitarian political regimes. We are looking to expand our network to build more refugee camps to places in Syria and Iraq.',
				goal_name: 'Expand Refugee Camps',
				issued_to: 'IRC Middle East Team',
				redeemed: false
			}
		];

		let dwbData = [
			{
				amount: '$500,000',
				approvals: 0,
				contributors: [0, 0, 0],
				goal_desc:
					'A recent blood shortage has overwhelmed our equipment supply and we are seeking permission to purchase related materials with donated funds',
				goal_name: 'Blood Transfusion Kits',
				issued_to: 'Bound Tree',
				redeemed: false
			},
			{
				amount: '$12,000,000',
				approvals: 0,
				contributors: [0, 0, 0],
				goal_desc:
					"Angola's recent rise in Malaria cases has created unrest within the community and we plan to distribute a significant supply of Atovaquone vaccines to those in need.",
				goal_name: 'Atovaquone Purchases',
				issued_to: 'GlaxoSmithKline',
				redeemed: false
			},
			{
				amount: '$230,000',
				approvals: 0,
				contributors: [0, 0, 0],
				goal_desc:
					'Our yearly global survey of regional needs is comming up this June. We are looking for basic transportation and living costs for our corporate employees.',
				goal_name: 'Global Surveying',
				issued_to: 'DWB Employees',
				redeemed: false
			}
		];

		let bernieData = [
			{
				amount: '$1,500,000',
				approvals: 0,
				contributors: [0, 0, 0],
				goal_desc:
					'My fellow citizens, how is it the wealthiest country in the history of the world doesn’t guarantee healthcare to all people as a right, not a privilege. How is it, the top tenth of 1% owns as much wealth as the bottom 90%. ',
				goal_name: 'End Citizens United',
				issued_to: 'Wolf Pac, Alison Hartson',
				redeemed: false
			},
			{
				amount: '$250,000',
				approvals: 0,
				contributors: [0, 0, 0],
				goal_desc:
					'The tragedy of the parkland shooting was horrific and should never happen again. Please support me in raising money for the parkland survivors and other young folks fight the war on common-sense gun control.',
				goal_name: 'Let’s Fight For Gun Reform',
				issued_to: 'Various Local Communities',
				redeemed: false
			},
			{
				amount: '$300,000',
				approvals: 0,
				contributors: [0, 0, 0],
				goal_desc:
					'Councilman Jumaane Williams is facing tough competition these next few months in his district. We want to forward some of our funding to support a brave councilman with ideals very much in line with ours.',
				goal_name: 'Councilman Jumaane Williams Campaign',
				issued_to: 'Councilman Jumaane Williams Campaign',
				redeemed: false
			}
		];

		ircRef.set(ircData);
		dwbRef.set(dwbData);
		bernieRef.set(bernieData);
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
					<button onClick={this.switch}>
						TRIGGER - Current State: {`${this.state.started}`}
					</button>
					<button onClick={this.contributeToEachCampaign}>
						MASS CONTRIBUTE
					</button>
					<button onClick={this.resetStuffOnFirebase}>
						RESET FIREBASE STUFFFFF
					</button>
				</header>
				<p className="App-intro">
					{/* This is the timer value: {this.state.timestamp} */}
				</p>
			</div>
		);
	}
}

export default App;
