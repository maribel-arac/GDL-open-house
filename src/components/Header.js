import React, { Component } from 'react';
import ShowDate from './ShowDate'

class Header extends Component {

	render () {

		return (

			<div className="header">
				<div className="row">

					<nav className="navbar">
						<div className="col-sm-5">
							<div className="navbar-brand" >
								<img className="logo img-fluid" alt="logo" src={require("../images/logo.png" )}/>
							</div>
						</div>

						<div className="col-sm-5">
							<ShowDate />
						</div>

						<div className="col-sm-2">

							<div className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i className="fas fa-bars"></i>
								</a>

								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a className="dropdown-item" href="#">Inicio</a>
									<a className="dropdown-item" href="#">Toma de Asistencia</a>
									<a className="dropdown-item" href="#">Historial</a>
								</div>

							</div>

						</div>

					</nav>
				</div>

			</div>


		);

	}

}

export default Header;