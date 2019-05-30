import React from 'react';
import './ShowDate.css';
import moment from 'moment';

export default function ShowDate (){

	return (
		<div className="date">
			<h6> {moment().format('lll')} </h6>
		</div>)

}