import React, { Component } from 'react';
import ShowDate from './ShowDate';
import {NavLink} from 'react-router-dom';


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
						<ul class="nav-menu">
		                         	<li> <NavLink className="nav-menu__link" exact to="/">Inicio</NavLink></li>
		                        	<li> <NavLink className="nav-menu__link" to="/scanner">Asistencia</NavLink></li>
		                        	<li> <NavLink className="nav-menu__link" to="/history">Historial</NavLink></li>
		                        </ul>
						</div>



					</nav>
				</div>

			</div>


		);

	}

}

export default Header;