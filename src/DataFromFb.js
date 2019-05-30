import { Component } from 'react';
import './App.css';
import firebase from './firebase/start-firebase';

export class DataFromFb extends Component {

	constructor(){
		super();
		this.state = {
			students: []
		};
	}

	componentDidMount() {

		const studentsRef = firebase.database().ref('students-ref');

		studentsRef.on('value', (snapshot) => {

			let students = snapshot.val();

			let studentsUpdate = [];

			for (let student in students) {

				studentsUpdate.push({
					id: student.id,
					name: student.name,
					mail: student.mail,
					code: student.code,
					active: student.active
				});

			}

			this.setState({
				students: studentsUpdate
			});

		});

	}

}

export default DataFromFb;
