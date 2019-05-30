	import React, { Component } from 'react';
	import Instructions from './Instructions';
	import Scanner from './Scanner';
	import AttendanceMsg from './AttendanceMsg';



	class DisplayQrScan extends Component {

		render () {

			return (

				<div className=" display-qr-scan container" >

					<div className="row">

						<div className="col-4">
							<Instructions />
						</div>

					</div>

					<div className="row">

						<div className="col-6">
							<Scanner />
						</div>

						<div className="col-6">
							<AttendanceMsg />
						</div>

					</div>
				</div>

			);

		}

	}

	export default DisplayQrScan;