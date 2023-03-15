import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import Dashboard from './pages/Dashboard/Dashboard';
import HeaderBar from './components/HeaderBar/HeaderBar';

function App() {
	return (
		<div className="App">
			<HeaderBar />
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/users" element={<UserList />} key="1" /> {/* Add the UserList route */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
