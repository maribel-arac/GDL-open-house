import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import DataFromFb from './DataFromFb';
import Header from './components/Header';
import Home from './components/Home';
import DisplayQrScan from './components/DisplayQrScan';
import './App.css';
import History from './components/History';

function App() {
	console.log(DataFromFb);
	return (


		<BrowserRouter>

		<div className="App">

			<Header name="Organa"/ >
			<Route exact path="/" render = {()=> <Home />} />
			<Route exact path="/scanner" render = {()=> <DisplayQrScan />} />
			<Route path="/history" render = {()=> <History />} />

		</div>

		</BrowserRouter>

	);
}

export default App;

