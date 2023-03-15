import { Table } from 'antd';
import './Dashboard.css';

const Dashboard = () => {
	const dataSource = [
		{
			key: '1',
			lambdaName: 'Credit Offer API',
			version: '1.1',
			previousVersion: '1.0',
			dateModified: '21/02/23',
			dateCreated: '21/01/23',
			accountNumber: '123456',
			environment: 'DEV1',
		},
		{
			key: '2',
			lambdaName: 'BNPL',
			version: '3.4',
			previousVersion: '3.3',
			dateModified: '01/12/2022',
			dateCreated: '21/11/22',
			accountNumber: '123456',
			environment: 'PRD1',
		},
		{
			key: '3',
			lambdaName: 'Activity Notifier',
			version: '2.6',
			previousVersion: '2.5',
			dateModified: '01/12/2022',
			dateCreated: '21/11/22',
			accountNumber: '123456',
			environment: 'PREPRD1',
		},
	];
	const sortDirections = ['ascend', 'descend', 'ascend'];

	const columns: any = [
		{
			title: 'Lambda name',
			dataIndex: 'lambdaName',
			key: 'lambdaName',
			defaultSortOrder: 'ascend',
			sorter: (a: any, b: any) => a.lambdaName.localeCompare(b.lambdaName),
			sortDirections,
		},
		{
			title: 'Version',
			dataIndex: 'version',
			key: 'version',
			sorter: (a: any, b: any) => a.version.localeCompare(b.version),
			sortDirections,
		},
		{
			title: 'Previous version',
			dataIndex: 'previousVersion',
			key: 'perviousVersion',
			sorter: (a: any, b: any) =>
				a.previousVersion.localeCompare(b.previousVersion),
			sortDirections,
		},
		{
			title: 'Date modified',
			dataIndex: 'dateModified',
			key: 'dateModified',
			sorter: (a: any, b: any) => a.dateModified.localeCompare(b.dateModified),
			sortDirections,
		},
		{
			title: 'Date created',
			dataIndex: 'dateCreated',
			key: 'dateCreated',
			sorter: (a: any, b: any) => a.dateCreated.localeCompare(b.dateCreated),
			sortDirections,
		},
		{
			title: 'Account number',
			dataIndex: 'accountNumber',
			key: 'accountNumber',
			sorter: (a: any, b: any) =>
				a.accountNumber.localeCompare(b.accountNumber),
			sortDirections,
		},
		{
			title: 'Environment',
			dataIndex: 'environment',
			key: 'environment',
			sorter: (a: any, b: any) => a.environment.localeCompare(b.environment),
			sortDirections,
		},
	];
	return (
		<Table
			dataSource={dataSource}
			className="dashboard-table"
			columns={columns}
		/>
	);
};

export default Dashboard;
