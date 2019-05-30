import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import DataFromFb from './DataFromFb';
import Header from './components/Header';
import Home from './components/Home';
import DisplayQrScan from './components/DisplayQrScan';
import './App.css';

function App() {
	console.log(DataFromFb);
	return (

		<BrowserRouter>

		<div className="App">

			<Header name="Organa"/ >
			<Route path="/" render = {()=> <Home />} />
			<Route path="/display-qr-scan" component={DisplayQrScan} />


		</div>

		</BrowserRouter>
	);
}

export default App;
