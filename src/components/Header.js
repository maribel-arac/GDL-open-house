import React, { Component } from 'react';

class Header extends Component {

	render () {

		return (

			<div className="header">
				<nav className="navbar">
					<div className="navbar-brand">
						<img className="logo" src={require("../images/logo.png" )}/>
					</div>
				</nav>

			</div>

		)

	}

}

export default Header;