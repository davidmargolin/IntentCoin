import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    padding: 0;
    margin: 0;

  }
`;

const NavLeft = styled.div`
	background-color: white;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const NavBar1 = styled.div`
	width: 100%;
	background-color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-shadow: 1px 1px 2px #cecece;
`;

const Logo = styled.img`
	border-radius: 50%;
	margin: 14px;
	width: 50px;
	height: 50px;
	border-color: black;
	border-radius: 5px;
`;

const Input = styled.input`
	width: 375px;
	height: 30px;
	border-radius: 1;
	outline: none;
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 18px;
	padding: 8px;
	margin-left: 70px;
	font-weight: bold;
`;
const MainHeader = styled.h1`
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 30px;
	color: black;
	flex: 2;
`;
const ProjectButton = styled.ul`
	justify-content: 'flex-end';
	list-style-type: none;
	color: #6a6fea;
	font-size: 20px;
	font-weight: bolder;
	margin-right: 30px;
	font-family: 'Source Sans Pro', sans-serif;
`;
const ProjectButtonLink = styled.div`
	display: block;
	padding: 8px;
	text-decoration: none;
`;

const Container = styled.div`
	background-color: red;
	flex: 1;
	height: 100;
	background-color: red;
`;

export default class NavBar extends Component {
	render() {
		return (
			<Container
				styled={{ backgroundColor: 'red', height: 100, width: '100%' }}
			/>
			// <NavBar1>
			// 	<NavLeft>
			// 		{/* <Link to="/"> */}
			// 		<Logo
			// 			className="Logo"
			// 			src="https://i.pinimg.com/originals/3c/eb/9a/3ceb9ae6a1040db7fe5b5f35fcd05aac.jpg"
			// 		/>{' '}
			// 		{/* </Link> */}
			// 		{/* <Link to="/"> */}
			// 		<MainHeader className="Name">CharityBlock</MainHeader>
			// 		{/* </Link> */}
			// 		<Input type="text" placeholder="Search Charities..." />
			// 	</NavLeft>
			// 	<ProjectButton>
			// 		<button>
			// 			<ProjectButtonLink href="">Make a project</ProjectButtonLink>
			// 		</button>
			// 	</ProjectButton>
			// </NavBar1>
		);
	}
}
