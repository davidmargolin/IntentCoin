import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    padding: 0;
    margin: 0;

  }
`;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	padding-left: 10%;
	padding-right: 10%;
	flex-direction: column;
`;

const Form1 = styled.div`
	flex: 1;
	width: 100%;
	background: blue;
`;

const sideBar = {
	flex: 1,
	backgroundColor: '#696BED',
	height: '80vh'
};

const leftForm = {
	flex: 5,
	backgroundColor: 'blue',
	height: '80vh'
};

const rightForm = {
	flex: 5,
	height: '80vh',
	backgroundColor: 'red'
};

const card = {};

class Form extends Component {
	render() {
		return (
			<Container>
				<Form1>
					{/* <div style={sideBar} />
				<div style={leftForm} />
				<div style={rightForm} /> */}
				</Form1>
			</Container>
		);
	}
}

export default Form;
