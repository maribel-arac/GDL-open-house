import React from 'react';
import moment from 'moment';

export default function ShowDate (){

	return <h6> {moment().format('lll')} </h6>

}