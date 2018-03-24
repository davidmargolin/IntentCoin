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

class RequestDetailScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			intent: 'Buy Batteries',
			amount: '$1000',
			issued: 'Staples',
			description:
				'We need to buy batteries to continue on with Destroyer A. We will use the batteries to power up the engine rockets of Destroyer A'
		};
	}

	_renderItem({ item, index }) {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{item.title}</Text>
			</View>
		);
	}

	componentWillReceiveProps(newProps) {
		console.log('We recieved the new props', newProps);

		let { main } = newProps['from-redux'];

		this.setState({
			message: main.message,
			val: main.val
		});
	}

	goBack = () => {
		this.props.navigation.goBack();
	};

	accept = () => {
		var newEventRef = database.ref('events').push();

		newEventRef.set({
			type: 'APPROVE',
			user: 'userKey',
			requestId: 3
		});

		//we still gotta go back
		this.goBack();
	};
	selectedCard = () => {
		console.log('Card Selected');
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.top}>
					<TouchableOpacity onPress={this.goBack}>
						<Text style={styles.topText}>Back</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.content}>
					<View style={styles.card}>
						<Text style={styles.cardHeader}>Intent</Text>
						<Text style={styles.cardBody}>{this.state.intent}</Text>
						<Text style={styles.cardHeader}>Description</Text>
						<Text style={styles.cardBody}>{this.state.description}</Text>
						<Text style={styles.cardHeader}>Amount</Text>
						<Text style={styles.cardBody}>{this.state.amount}</Text>
						<Text style={styles.cardHeader}>Issued</Text>
						<Text style={styles.cardBody}>{this.state.issued}</Text>
					</View>
				</View>
				<View style={styles.bottom}>
					<TouchableOpacity
						onPress={this.goBack}
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

const mapStateToProps = (state, ownProps) => {
	console.log('Request Detail State', state);
	return {
		'from-redux': state
	};
};

export default connect(mapStateToProps)(RequestDetailScreen);
