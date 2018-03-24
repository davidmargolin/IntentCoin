import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
	Platform
} from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { enterApp } from '../actions';
import LoginLogo from '../components/LoginLogo';
import { StackNavigator } from 'react-navigation';

import Screen from '../assets/Screen.png';
import {
	BLUEPURPLE,
	WHITE,
	FADE,
	LARGE,
	MEDIUM,
	SMALL,
	BLACK,
	BUTTON_BORDER_RADIUS
} from '../common/constants';

const OS = Platform.OS;
const GRADIENT_COLOR = BLUEPURPLE;
const BORDER_WIDTH = 1.5;

const hashDictionary = {
	user1: '0x6A74130e400231B2c2E3cCed30577EB949D05750',
	user2: '0x0D1AA50D2fBa30B9835b1C82a15D12743a27c975',
	user3: '0xdEBb73bD939cda799570D4aF51EaffF2FeEF03f8'
};

class LoginScreen extends Component {
	state = {
		keyboardActive: false,
		code: ''
	};
	componentWillMount() {
		this.keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			this.keyboardDidShow
		);
		this.keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			this.keyboardDidHide
		);
	}

	componentWillUnmount() {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	}

	keyboardDidShow = () => {
		this.setState({ keyboardActive: true });
	};

	keyboardDidHide = () => {
		this.setState({ keyboardActive: false });
	};

	enter = async () => {
		let { code } = this.state;
		let key = hashDictionary['user1'];
		if (hashDictionary[code]) {
			key = hashDictionary['user1'];
		}
		Keyboard.dismiss();
		let index = 1;

		if (code == 'user2') {
			index = 2;
		} else if (code == 'user3') {
			index = 3;
		}

		await this.props.enterApp(key, index);
		this.props.navigation.navigate('main');
	};
	render() {
		const { transparent, container, header, body, footer, Wrapper } = styles;
		const { subtitle, title, row, bar, filling } = styles;
		const { footerBody, footerTitle, actionButton, actionButtonText } = styles;

		const { keyboardActive } = this.state;
		return (
			<KeyboardAvoidingView style={Wrapper} behavior="padding">
				<LinearGradient colors={GRADIENT_COLOR} style={container} />
				<StatusBar barStyle="light-content" />
				<View style={[transparent, header]}>
					<LoginLogo image={Screen} />
				</View>
				<View style={[transparent, footer]}>
					<View style={[styles.formFrame, { borderBottomWidth: BORDER_WIDTH }]}>
						<View style={filling} />
						<Text style={styles.formLabel}>Key:</Text>
						<TextInput
							value={this.state.code}
							style={styles.input}
							onChangeText={code => this.setState({ code })}
							underlineColorAndroid="transparent"
						/>
					</View>

					<TouchableOpacity style={actionButton} onPress={this.enter}>
						<View style={styles.actionButtonFade} />
						<Text style={actionButtonText}>Enter</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	Wrapper: {
		flex: 1,
		paddingTop: OS == 'android' ? 15 : 0
	},
	container: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	},
	transparent: {
		backgroundColor: 'transparent'
	},
	title: {
		fontSize: LARGE,
		fontWeight: 'bold',
		color: 'white'
	},
	subtitle: {
		fontSize: 20,
		color: 'white',
		marginTop: 5
	},
	header: {
		flex: 0.7,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20
	},
	body: {
		flex: 1
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	footer: {
		flex: 1,
		marginTop: 20
	},
	formFrame: {
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginLeft: 30,
		marginRight: 30,
		borderColor: WHITE,
		borderWidth: BORDER_WIDTH,
		borderBottomWidth: 0
	},
	footerBody: {
		flex: 2,
		marginTop: 10,
		paddingLeft: 30,
		paddingRight: 30
	},
	filling: {
		position: 'absolute',
		backgroundColor: WHITE,
		opacity: FADE,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	formLabel: {
		color: WHITE,
		flex: 1,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: SMALL + 2,
		paddingTop: 5,
		paddingBottom: 5
	},
	input: {
		color: WHITE,
		height: 50,
		flex: 4,
		fontSize: 15
	},
	actionButton: {
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginLeft: 30,
		marginRight: 30
	},
	actionButtonFade: {
		position: 'absolute',
		backgroundColor: 'black',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		opacity: FADE + 0.2
	},
	actionButtonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16
	},
	inputContainer: {
		flexDirection: 'row',
		marginTop: 10,
		alignItems: 'flex-end'
	}
});

const mapDispatchToProps = dispatch => ({
	enterApp: (key, index) => {
		dispatch(enterApp(key, index));
	}
});

export default connect(null, mapDispatchToProps)(LoginScreen);
