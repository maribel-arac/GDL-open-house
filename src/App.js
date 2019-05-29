import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

function App() {

	return (

		<BrowserRouter>

		<div className="App">

			<Header name="Organa"/ >
			<Route exact path="/" render = {()=> <Home />} />
			{/* <Route exact path="/scanner" render = {()=> <DisplayQrScan />} /> */}

		</div>

		</BrowserRouter>
	);
}

export default App;
