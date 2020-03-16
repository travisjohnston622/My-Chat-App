import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import './LandingPage.css';

class LandingPage extends Component {
	state = {
		heading: 'Wanna chit-chat?',
	};

	onLogin = event => {
		this.props.history.push('/login');
	};

	render() {
		return (
			<div className='container'>
				<h1>{this.state.heading}</h1>

				<div className='grid'>
					<div className='grid-col grid-col_8'>
						<p>
							Welcome to Chitter-Chatter! Love chit-chatting with your friends
							and family? If you answered yes then you're in the right place!
							Chitter-Chatter is a simple yet fun messaging app that allows you
							to connect with your frineds and family all around the world. Go
							ahead and login if you have a registered account or create an
							account if you're new to Chitter-Chatter so you can start
							connecting!
						</p>
					</div>
					<div className='grid-col grid-col_4'>
						<h3>Already a Member?</h3>
						<button className='btn btn_sizeFull' onClick={this.onLogin}>
							Login
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(LandingPage);
