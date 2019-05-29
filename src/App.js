import React from 'react';
import './App.css';

function App() {

	return (

		<BrowserRouter>

		<div className="App">

			<Header name="Organa"/ >
			<Route exact path="/" render = {()=> <Home />} />
			<Route exact path="/scanner" render = {()=> <DisplayQrScan />} />

		</div>

		</BrowserRouter>
	)
}

export default App;