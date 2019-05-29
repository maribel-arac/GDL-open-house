import React, { Component } from 'react';

class Header extends Component {

	render () {

		return (

			<div className="header">
				<nav className="navbar">
					<a className="navbar-brand" >
					<img className="logo" src="../images/logo.png" />
					<span className="badge badge-pill badge-light ml-2">
					</span>
					</a>
				</nav>

			</div>

		)

	}

}

export default Header;