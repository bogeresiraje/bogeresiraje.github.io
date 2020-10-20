import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/commom/Home';
import Services from './components/services/Services';
import Technologies from './components/technologies/Technologies';


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/services' component={Services}/>
				<Route path='/technologies' component={Technologies}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
