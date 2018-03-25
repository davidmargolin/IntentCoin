import React, { Component } from 'react';
import {
	Text,
	View,
	Dimensions,
	Platform,
	StyleSheet,
	FlatList,
	Image,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { chooseContract } from '../actions';

import card from '../assets/cards.png';
import folder from '../assets/folder.png';
import person from '../assets/person.png';

import irc from '../assets/irc.png';
import dwb from '../assets/dwb.png';
import maw from '../assets/maw.png';
import pp from '../assets/pp.png';
import sjc from '../assets/sjc.png';
import bernie from '../assets/bernie.png';

const { HEIGHT, WIDTH } = Dimensions.get('window');

const NavBar = () => (
	<View style={styles.navbar}>
		<TouchableOpacity>
			<Text style={styles.selected}>Health</Text>
		</TouchableOpacity>
		<TouchableOpacity>
			<Text style={styles.notSelected}>Education</Text>
		</TouchableOpacity>
		<TouchableOpacity>
			<Text style={styles.notSelected}>Politics</Text>
		</TouchableOpacity>
	</View>
);
const CardSample = ({ item, index, onPress }) => {
	const { color, image, key } = item;
	return (
		<View style={styles.CardSample1}>
			<TouchableOpacity
				style={[styles.upperBox, { backgroundColor: color }]}
				onPress={() => onPress(key, index)}
			>
				<Image source={image} />
			</TouchableOpacity>
		</View>
	);
};

const BottomBar = () => (
	<View style={styles.bottomBar}>
		<View style={styles.imageCard}>
			<Image source={card} style={styles.image} />
		</View>
		<View style={styles.imageCard}>
			<Image source={folder} style={styles.image} />
		</View>
		<View style={styles.imageCard}>
			<Image source={person} style={styles.image} />
		</View>
	</View>
);

let colors = ['#6A6FEA', '#E24A4A', '#6AE8FF', '#38E0D3', '#F82E55'];
let images = [irc, dwb, bernie, pp, sjc];

class MainScreen extends Component {
	state = {
		data: [
			{
				key: 'contract1',
				color: '#6A6FEA',
				image: irc
			},
			{
				key: 'contract2',
				color: '#E24A4A',
				image: dwb
			},
			{
				key: 'contract3',
				color: '#6AE8FF',
				image: bernie
			},
			{
				key: 'contract4',
				color: '#38E0D3',
				image: pp
			},

			{
				key: 'contract5',
				color: '#F82E55',
				image: sjc
			}
		],
		scrolling: false
	};

	_renderItem({ item, index }) {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{item.title}</Text>
			</View>
		);
	}

	onPress = async (key, index) => {
		if (index == 3 || index == 4) {
			return 0;
		} else {
			console.log(index);
		}
		await this.props.chooseContract(key);
		this.props.navigation.navigate('request');
	};

	render() {
		return (
			<View style={styles.container}>
				<NavBar />
				<View style={styles.innerContainer}>
					<FlatList
						horizontal
						onScroll={() => this.setState({ scrolling: true })}
						data={this.state.data}
						style={styles.flatList}
						onScrollEndDrag={() => this.setState({ scrolling: false })}
						contentContainerStyle={{
							justifyContent: 'center',
							alignItems: 'center'
						}}
						renderItem={({ item: rowData, index }) => {
							return (
								<CardSample
									index={index}
									item={rowData}
									onPress={this.onPress}
								/>
							);
						}}
						keyExtractor={(item, index) => index}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
				<BottomBar />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	innerContainer: {
		width: WIDTH,
		flex: 13,
		justifyContent: 'center',
		alignItems: 'center'
	},
	CardSample1: {
		width: 290,
		height: 425,
		marginLeft: 40,
		marginRight: 10,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#f3f3f3'
	},
	upperBox: {
		backgroundColor: '#6A6FEA',
		flex: 3,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderColor: '#f3f3f3',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 2,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	lowerBox: {
		flex: 1,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderColor: 'white',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 2,
		marginBottom: 10
	},
	navbar: {
		flex: Platform.OS === 'ios' ? 1 : 2,
		marginTop: 40,
		flexDirection: 'row',
		paddingLeft: 30,
		alignItems: 'center'
	},
	selected: {
		fontWeight: 'bold',
		color: '#6A6FEA',
		fontSize: Platform.OS === 'ios' ? 20 : 22
	},
	notSelected: {
		fontWeight: 'bold',
		color: '#AAA7A7',
		marginLeft: 20,
		fontSize: Platform.OS === 'ios' ? 20 : 22
	},
	bottomBar: {
		flex: 1.5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	imageCard: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => ({
	chooseContract: key => {
		dispatch(chooseContract(key));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
