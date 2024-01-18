import React, { Suspense } from 'react';

import ErrorPage from '@/components/Error/Error';
import SignUpForm from '@/auth/SignUpForm';
import LoginPage from '@/auth/LoginForm';
import CreatePasswordForm from './auth/CreatePasswordForm';
import PasswordsetupLinkInfo from './auth/PasswordsetupLinkInfo';
import FortgotPasswordForm from './auth/ForgotPasswordForm';
import LinkExpiredForm from './auth/LinkExpiredForm';
import BaseLayout from '@/components/BaseLayout';
import Dashboard from '@/target/NBFC/pages/Dashboard/Dashboard';
import LoanPoolCreation from '@/target/NBFC/pages/LoanPoolCreation/LoanPoolCreation';
import LoanPoolTimeline from './target/NBFC/pages/LoanPoolTimeline/LoanPoolTimeline';
import DueDiligence from './target/NBFC/pages/NBFCDueDiligence/DueDiligence';
import UmsTabs from './target/NBFC/pages/Ums/UmsTabs';
import Profile from './target/NBFC/pages/Ums/components/Profile';
import User from './target/NBFC/pages/Ums/components/User';
import AuthRequired from '@/components/AuthRequired';
import DashboardIcon from '@/assets/svg/DashboardIcon';
import LoanPoolIcon from '@/assets/svg/LoanPoolIcon';
import DueDeligenceIcon from '@/assets/svg/DueDeligenceIcon';
import CurrencyExchangeIcon from '@/assets/svg/CurrencyExchangeIcon';
import PoolStatusIcon from '@/assets/svg/PoolStatusIcon';
import ReportIcon from '@/assets/svg/ReportIcon';
import BankDueDiligence from './target/Bank/pages/BankDueDiligence/BankDueDiligence';
import BankDashboard from './target/Bank/pages/Dashboard/BankDashboard';
import ProductList from './target/Bank/pages/Product/ProductList';
import SelectProduct from './target/Bank/pages/Product/SelectProduct';
import PoolList from './target/Bank/pages/Pools/PoolList';
import DemandCollection from './target/NBFC/pages/DemandCollection/DemandCollection';
import { LoanPoolCustomerDetails } from './target/NBFC/pages/ViewLoanPool/LoanPoolCustomerDetails';

const nbfcPages = [
	{
		text: 'Dashboard',
		to: 'dashboard',
		icon: (isSelected) => (
			<DashboardIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
	{
		text: 'Create Loan Pool',
		to: 'lpc',
		icon: (isSelected) => (
			<LoanPoolIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
	{
		text: 'Due Diligence',
		to: 'lpt',
		icon: (isSelected) => (
			<DueDeligenceIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
	{
		text: 'Transaction',
		to: 'queries',
		icon: (isSelected) => (
			<CurrencyExchangeIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
	{
		text: 'Pool Status',
		to: 'slp',
		icon: (isSelected) => (
			<PoolStatusIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
	{
		text: 'Reports',
		to: 'reports',
		icon: (isSelected) => (
			<ReportIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
];

const bankPages = [
	{
		text: 'Dashboard',
		to: 'dashboard',
		icon: (isSelected) => (
			<DashboardIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
	{
		text: 'Create Loan Pool',
		to: 'lpc',
		icon: (isSelected) => (
			<LoanPoolIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
	{
		text: 'Due Diligence',
		to: 'lpt',
		icon: (isSelected) => (
			<DueDeligenceIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
	{
		text: 'Transaction',
		to: 'queries',
		icon: (isSelected) => (
			<CurrencyExchangeIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
	{
		text: 'Pool Status',
		to: 'slp',
		icon: (isSelected) => (
			<PoolStatusIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
	{
		text: 'Reports',
		to: 'reports',
		icon: (isSelected) => (
			<ReportIcon stroke={isSelected ? '#FFF' : '#8794C2'} />
		),
	},
];

export const routes = [
	{
		path: '/',
		element: <SignUpForm />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/sign-in',
		element: <LoginPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/create-password',
		element: <CreatePasswordForm />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/email-confirm',
		element: <PasswordsetupLinkInfo />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/forgot-password',
		element: <FortgotPasswordForm />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/link-expired',
		element: <LinkExpiredForm />,
		errorElement: <ErrorPage />,
	},

	// nbfc routes
	{
		path: '/nbfc/panel/*',
		element: (
			// <Suspense>
			<AuthRequired>
				<BaseLayout pages={nbfcPages} />
			</AuthRequired>
			// </Suspense>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'dashboard',
				element: (
					// <Suspense fallback={'Loading ...'}>
					<Dashboard />
					// </Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'lpc',
				element: (
					<Suspense fallback={'Loading ...'}>
						<LoanPoolCreation />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'lpt',
				element: (
					<Suspense fallback={'Loading ...'}>
						<LoanPoolTimeline />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'dd',
				element: (
					<Suspense fallback={'Loading ...'}>
						<DueDiligence />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'dc',
				element: (
					<Suspense fallback={'Loading ...'}>
						<DemandCollection />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'customer-details',
				element: (
					<Suspense fallback={'Loading ...'}>
						<LoanPoolCustomerDetails />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'ums',
				element: (
					<Suspense fallback={'Loading ...'}>
						<UmsTabs />
					</Suspense>
				),
				errorElement: <ErrorPage />,
				children: [
					// { index: true, element: <Navigate to={'newreport'} /> },
					{ path: 'profile', element: <Profile /> },
					{ path: 'mgmt', element: <User /> },
				],
			},
		],
	},

	// bank routes
	{
		path: '/bank/panel/*',
		element: (
			<Suspense>
				<AuthRequired>
					<BaseLayout pages={bankPages} />
				</AuthRequired>
			</Suspense>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'dashboard',
				element: (
					<Suspense fallback={'Loading ...'}>
						<BankDashboard />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'dd',
				element: (
					<Suspense fallback={'Loading ...'}>
						<BankDueDiligence />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'product-list',
				element: (
					<Suspense fallback={'Loading ...'}>
						<ProductList />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'product',
				element: (
					<Suspense fallback={'Loading ...'}>
						<SelectProduct />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'pool',
				element: (
					<Suspense fallback={'Loading ...'}>
						<PoolList />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
		],
	},
];
