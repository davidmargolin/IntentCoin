import React, { Component } from 'react';
import {
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { updateMessage, updateVal } from '../actions';
import { Button } from 'react-native-elements';
import { database } from '../firebase/firebase';

const { HEIGHT, WIDTH } = Dimensions.get('window');

const contracts = {
	contract1: '0x1b6007f93a4c1af2f82df7f05f46779062d97007',
	contract2: '0x1d823259964e4d4fdba1e079314ff6084399b39a',
	contract3: '0x14ce806d6749237a09117f56dc038e452d1c3eff'
};

class RequestDetailScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: '',
			amount_dollars: '',
			goal_desc: '',
			goal_name: '',
			issued_to: '',
			status: 0,
			approvals: 0
		};
	}
	componentWillMount() {
		let { contractKey, userKey, requestIndex, userIndex } = this.props;
		console.log('hello detail', contractKey);
		let ref;
		if (contractKey == 'contract1') {
			ref = database.ref(`Environment/3/intents/${requestIndex}`);
		} else if (contractKey == 'contract3') {
			ref = database.ref(`Policy/0/intents/${requestIndex}`);
		} else {
			ref = database.ref(`Health/1/intents/${requestIndex}`);
		}

		console.log('breakkkkk');
		ref.once('value', snapshot => {
			let data = snapshot.val();
			let status = data.contributors[userIndex - 1];
			let { amount_dollars, goal_desc, goal_name, issued_to, approvals } = data;
			this.setState({
				status,
				amount_dollars,
				goal_desc,
				goal_name,
				issued_to,
				approvals
			});
		});
	}

	_renderItem({ item, index }) {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{item.title}</Text>
			</View>
		);
	}

	goBack = () => {
		this.props.navigation.goBack();
	};

	accept = () => {
		if (this.state.status == 2) {
			return 0;
		}
		let { userIndex, contractKey, requestIndex } = this.props;
		let realIndex = userIndex - 1;

		let ref;
		if (contractKey == 'contract1') {
			ref = database.ref(`Environment/3/intents/${requestIndex}/approvals`);
		} else if (contractKey == 'contract3') {
			ref = database.ref(`Policy/0/intents/${requestIndex}/approvals`);
		} else {
			ref = database.ref(`Health/1/intents/${requestIndex}/approvals`);
		}
		//
		ref.set(this.state.approvals + 1);

		let ref2;
		if (contractKey == 'contract1') {
			ref2 = database.ref(
				`Environment/3/intents/${requestIndex}/contributors/${realIndex}`
			);
		} else if (contractKey == 'contract3') {
			ref2 = database.ref(
				`Policy/0/intents/${requestIndex}/contributors/${realIndex}`
			);
		} else {
			ref2 = database.ref(
				`Health/1/intents/${requestIndex}/contributors/${realIndex}`
			);
		}
		//
		ref2.set(2);

		var newEventRef = database.ref('events').push();
		newEventRef.set({
			type: 'APPROVE',
			user: this.props.userKey,
			requestId: this.props.requestIndex,
			contract: contracts[this.props.contractKey]
		});

		this.goBack();
	};

	decline = async () => {
		if (this.state.status == 1) {
			return 0;
		}

		let { userIndex, contractKey, requestIndex } = this.props;
		let realIndex = userIndex - 1;

		let ref2;
		if (contractKey == 'contract1') {
			ref2 = database.ref(
				`Environment/3/intents/${requestIndex}/contributors/${realIndex}`
			);
		} else if (contractKey == 'contract3') {
			ref2 = database.ref(
				`Policy/0/intents/${requestIndex}/contributors/${realIndex}`
			);
		} else {
			ref2 = database.ref(
				`Health/1/intents/${requestIndex}/contributors/${realIndex}`
			);
		}
		//
		ref2.set(1);

		this.goBack();
	};
	selectedCard = () => {
		console.log('Card Selected');
	};

	render() {
		let { status } = this.state;

		let color = status == 0 ? '#6A6FEA' : '#E65454';
		if (status == 2) {
			color = '#25A33D';
		}
		console.log(this.props);
		return (
			<View style={styles.container}>
				<View style={styles.top}>
					<TouchableOpacity onPress={this.goBack}>
						<Text style={styles.topText}>Back</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.content}>
					<View style={[styles.card, { backgroundColor: color }]}>
						<Text style={styles.cardHeader}>Intent</Text>
						<Text style={styles.cardBody}>{this.state.goal_name}</Text>
						<Text style={styles.cardHeader}>Description</Text>
						<Text style={styles.cardBody}>{this.state.goal_desc}</Text>
						<Text style={styles.cardHeader}>Amount</Text>
						<Text style={styles.cardBody}>{this.state.amount_dollars}</Text>
						<Text style={styles.cardHeader}>Issued</Text>
						<Text style={styles.cardBody}>{this.state.issued_to}</Text>
					</View>
				</View>
				<View style={styles.bottom}>
					<TouchableOpacity
						onPress={this.decline}
						style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
					>
						<Text style={styles.bottomText}>Decline</Text>
					</TouchableOpacity>
					<View style={styles.bottomBar} />
					<TouchableOpacity
						style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
						onPress={this.accept}
					>
						<Text style={styles.bottomText}>Approve</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1.5,
		backgroundColor: 'white'
	},
	top: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: 20,
		backgroundColor: '#6A6FEA'
	},
	topText: {
		fontWeight: '800',
		marginLeft: 25,
		color: 'white',
		fontSize: 20
	},
	content: {
		flex: 9,
		alignItems: 'center',
		justifyContent: 'center'
	},
	itemCard: {
		height: 200,
		width: 290,
		marginBottom: 20,
		marginTop: 20
	},
	itemBody: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#d3d3d3',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.3,
		shadowRadius: 1,
		elevation: 2,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemTitle: {
		height: 60,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemText: {
		fontWeight: '800',
		color: 'white',
		fontSize: 20
	},
	bodyText: {
		fontSize: 14,
		marginLeft: 5,
		marginRight: 5
	},
	bottom: {
		flex: 1.2,
		backgroundColor: '#6A6FEA',
		flexDirection: 'row'
	},
	card: {
		width: 310,
		height: 440,
		backgroundColor: '#6A6FEA',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
		paddingLeft: 15,
		paddingRight: 15
	},
	cardHeader: {
		color: 'white',
		fontWeight: '800',
		fontSize: 24
	},
	cardBody: {
		color: 'white',
		marginTop: 10,
		marginBottom: 10,
		fontSize: 18,
		textAlign: 'center'
	},
	bottomText: {
		color: 'white',
		fontSize: 20,
		fontWeight: '800'
	},
	bottomBar: {
		backgroundColor: 'white',
		width: 5,
		marginTop: 10,
		marginBottom: 10
	}
};

const mapStateToProps = ({ main }) => {
	let { contractKey, requestIndex, userIndex, userKey } = main;
	return { contractKey, requestIndex, userIndex, userKey };
};

export default connect(mapStateToProps)(RequestDetailScreen);
