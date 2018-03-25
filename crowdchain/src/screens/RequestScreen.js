import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { chooseRequest } from '../actions';
import { Button } from 'react-native-elements';
import { database } from '../firebase/firebase';

colors = ['#6A6FEA', '#E65454', '#25A33D'];
const ItemCard = ({ item, index, onPress }) => {
	return (
		<TouchableOpacity style={styles.itemCard} onPress={() => onPress(index)}>
			<View
				style={[styles.itemTitle, { backgroundColor: colors[item.status] }]}
			>
				<Text style={styles.itemText}>{item.title}</Text>
			</View>
			<View style={styles.itemBody}>
				<Text style={[styles.bodyText, { color: colors[item.status] }]}>
					{item.description}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

class RequestScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			requests: [
				{
					title: 'Buy Batteries',
					description: 'We need to buy batteries for our first prototype',
					status: 0
				}
			]
		};

		let ref;
		if (this.props.contract == 'irc') {
			ref = database.ref('Environment/3/intents');
		} else {
			ref = database.ref('Policy/0/intents');
		}

		ref.on('value', snapshot => {
			let data = snapshot.val();
			let userIndex = this.props.index - 1;
			let requestList = [];

			data.map((request, index) => {
				console.log(request);
				let title = request.goal_name;
				let description = request.goal_desc;
				let status = request.contributors[userIndex];
				let issuedTo = request.issued_to;
				console.log('request info', title, description);
				let requestObject = { title, description, status };
				requestList.push(requestObject);
			});
			this.setState({ requests: requestList });
		});
	}

	_renderItem({ item, index }) {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{item.title}</Text>
			</View>
		);
	}

	componentWillReceiveProps(newProps) {
		let { main } = newProps['from-redux'];

		this.setState({
			message: main.message,
			val: main.val
		});
	}

	goBack = () => {
		this.props.navigation.goBack();
	};

	selectedCard = async index => {
		this.props.chooseRequest(index);
		this.props.navigation.navigate('requestDetail');
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.top} onPress={this.goBack}>
					<Text style={styles.topText}>Back</Text>
				</TouchableOpacity>
				<View style={styles.content}>
					<FlatList
						data={this.state.requests}
						style={styles.flatList}
						contentContainerStyle={{
							justifyContent: 'center',
							alignItems: 'center'
						}}
						renderItem={({ item: rowData, index }) => {
							return (
								<ItemCard
									index={index}
									item={rowData}
									onPress={this.selectedCard}
								/>
							);
						}}
						keyExtractor={(item, index) => index}
						showsVerticalScrollIndicator={false}
					/>
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
		paddingTop: 20
	},
	topText: {
		fontWeight: '800',
		marginLeft: 25,
		color: '#6A6FEA',
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
		elevation: 1,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemTitle: {
		height: 60,
		backgroundColor: 'red',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemText: {
		fontWeight: '800',
		color: 'white',
		fontSize: 20,
		textAlign: 'center'
	},
	bodyText: {
		fontSize: 14,
		marginLeft: 7,
		marginRight: 7
	}
};

const mapStateToProps = ({ main }) => {
	let { contractKey, userIndex } = main;
	return {
		contract: contractKey == 'contract3' ? 'bernie' : 'irc',
		index: userIndex
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		chooseRequest: index => {
			dispatch(chooseRequest(index));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestScreen);
