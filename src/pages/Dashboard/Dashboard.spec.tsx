import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('dashboard', () => {
	test('User should be able to see lambda name', () => {
		render(<Dashboard />);

		const lambdaName = screen.getByText('Lambda name');

		expect(lambdaName).toBeInTheDocument();
	});

	test('User should be able to see version', () => {
		render(<Dashboard />);

		const version = screen.getByText('Version');

		expect(version).toBeInTheDocument();
	});

	test('User should be able to see date modified', () => {
		render(<Dashboard />);

		const dateModified = screen.getByText('Date modified');

		expect(dateModified).toBeInTheDocument();
	});

	test('User should be able to see environment', () => {
		render(<Dashboard />);

		const environment = screen.getByText('Environment');

		expect(environment).toBeInTheDocument();
	});

	test('User should be able to see AWS account number', () => {
		render(<Dashboard />);

		const accountNumber = screen.getByText('Account number');

		expect(accountNumber).toBeInTheDocument();
	});

	test('User should be able to see previous version', () => {
		render(<Dashboard />);

		const previousVersion = screen.getByText('Previous version');

		expect(previousVersion).toBeInTheDocument();
	});

	test('User should be able to see date created', () => {
		render(<Dashboard />);

		const dateCreated = screen.getByText('Date created');

		expect(dateCreated).toBeInTheDocument();
	});
});
