import React, { Component } from 'react';
import ShowDate from './ShowDate'

class Header extends Component {

	render () {

		return (
			<div className="container">
				<div className="header">

					<nav className="navbar">
						<div className="navbar-brand" >
							<img className="logo img-fluid" alt="logo" src={require("../images/logo.png" )}/>
						</div>
						<ShowDate />
					</nav>

				</div>
			</div>

		);

	}

}

export default Header;