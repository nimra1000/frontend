import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import HeaderBar from './components/HeaderBar/HeaderBar';

function App() {
	return (
		<div className="App">
			<HeaderBar />
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
