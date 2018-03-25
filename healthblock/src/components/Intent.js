import React, { Component } from 'react';
import { Line } from 'rc-progress';
import * as firebase from 'firebase';

export default class Intent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			approvals: this.props.intent.approvals,
			redeemed: this.props.intent.redeemed
		};
	}

	componentDidMount = () => {
		let approvals = firebase
			.database()
			.ref(this.props.reference + '/approvals');
		approvals.on('value', snapshot => {
			this.setState({ approvals: snapshot.val() });
		});
		let redeemed = firebase.database().ref(this.props.reference + '/redeemed');
		redeemed.on('value', snapshot => {
			this.setState({ redeemed: snapshot.val() });
		});
	};

	onRedeem = async () => {
		//Push Event To Firebase
		const masterList = [
			'0x1b6007f93a4c1af2f82df7f05f46779062d97007',
			'0x1d823259964e4d4fdba1e079314ff6084399b39a',
			'0x14ce806d6749237a09117f56dc038e452d1c3eff'
		];
		console.log('Our Props');
		console.log(this.props, '\n');
		console.log('----------');
		let { reference } = this.props;
		let keys = reference.split('/');
		let category = keys[0];
		let requestId = keys[3];
		let campaign;

		if (category == 'Policy') {
			campaign = masterList[2];
		} else if (category == 'Health') {
			campaign = masterList[1];
		} else {
			campaign = masterList[0];
		}

		let event = {
			campaign,
			requestId,
			account: '0x6A74130e400231B2c2E3cCed30577EB949D05750',
			type: 'FINALIZE'
		};

		console.log('LOGGING THIS EVENT', event);
		var newEventRef = firebase
			.database()
			.ref('events')
			.push();
		newEventRef.set(event);

		let approvals = firebase
			.database()
			.ref(this.props.reference + '/redeemed')
			.set('true');
	};

	render() {
		let approved = false;
		let approval = (
			this.state.approvals /
			this.props.total_contributors *
			100
		).toFixed(0);
		if (approval >= 66) {
			approved = true;
		}

		return (
			<div
				style={{
					flexDirection: 'column',
					display: 'flex',
					boxShadow: '1px 1px 4px #cEcEcE',
					width: 400,
					height: 330,
					margin: 20
				}}
			>
				<div
					style={{
						padding: 20,
						flexDirection: 'column',
						display: 'flex',
						width: 360,
						height: 230
					}}
				>
					<text style={{ padding: 10 }}>
						{this.props.intent.amount_dollars} towards{' '}
						{this.props.intent.goal_name}
					</text>
					<text style={{ fontSize: 15, padding: 10 }}>
						{this.props.intent.goal_desc}
					</text>
					<Line
						style={{ margin: 16, marginLeft: 10, maxWidth: 368 }}
						percent={this.state.approvals / this.props.total_contributors * 100}
						strokeWidth="3"
					/>
					<text style={{ marginRight: 32, fontSize: 14, textAlign: 'right' }}>
						{' '}
						{(
							this.state.approvals /
							this.props.total_contributors *
							100
						).toFixed(0)}% Approval
					</text>
				</div>
				<button
					onClick={this.onRedeem}
					style={{
						width: '100%',
						float: 'right',
						marginTop: 10,
						padding: 10,
						color: approved && !this.state.redeemed ? 'green' : 'gray'
					}}
					disabled={!approved || this.state.redeemed}
				>
					{' '}
					{this.state.redeemed ? 'Funds Redeemed' : 'Retrieve Funds'}
				</button>
			</div>
		);
	}
}
