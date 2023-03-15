import React, { useState, useEffect } from 'react';
import api from '../services/api';

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			setLoading(true);
			try {
				const response = await api.get('/api/users');
				setUsers(response.data);
				setError(null);
			} catch (err) {
				setError('Failed to fetch users.');
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div>
			<h1>User List</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
