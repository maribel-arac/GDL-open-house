import React, { Component } from 'react';

class Header extends Component {

	render () {

		return (
			<div className="container">
				<div className="header">
					<nav className="navbar">
						<div className="navbar-brand">
							<img className="logo img-fluid" src={require("../images/logo.png" )}/>
						</div>
					</nav>

				</div>

			</div>

			<div>
			<ShowDate />
			</div>
		);

	}

}

export default Header;