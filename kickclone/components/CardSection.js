import React, { Component } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
export default class CardSection extends Component {
	render() {
		return (
			<div style={{ padding: 20 }}>
				<h2 style={{ marginLeft: 30 }}> {this.props.title}</h2>
				<div
					style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
				>
					{this.props.image_list.map((item, index) => (
						// <Link
						// 	to={'/' + this.props.title + '/' + index + '/' + item['name']}
						// >
						<Card image={item['profile_picture']} />
						// </Link>
					))}
					<div
						style={{
							flexDirection: 'column',
							textAlign: 'center',
							width: 270,
							height: 195,
							justifyContent: 'center',
							display: 'flex'
						}}
					>
						<t style={{ color: '#6A6FEA' }}>See More</t>
					</div>
				</div>
			</div>
		);
	}
}
