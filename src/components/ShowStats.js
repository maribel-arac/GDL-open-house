import React, { Component } from 'react';
import Stats from './Stats';


class ShowStats extends Component {

	render () {

		return (

			<div className="container" >

				<div className="row">

					<div className="col">
						<Stats />
					</div>

					<div className="col">
						<Stats />
					</div>

					<div className="col">
						<Stats />
					</div>

				</div>

			</div>

		);

	}

}

export default ShowStats;