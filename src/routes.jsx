import React, { Suspense } from 'react';

import ErrorPage from '@/components/Error/Error';
// import AuthRequired from './components/AuthRequired';
import SignUpForm from './pages/Auth/SignUpForm';
import LoginPage from './pages/Auth/LoginForm';
import CreatePasswordForm from './pages/Auth/CreatePasswordForm';
import PasswordsetupLinkInfo from './pages/Auth/PasswordsetupLinkInfo';
import FortgotPasswordForm from './pages/Auth/ForgotPasswordForm';
import LinkExpiredForm from './pages/Auth/LinkExpiredForm';
import BaseLayout from '@/components/BaseLayout';
import Dashboard from '@/pages/Dashboard/Dashboard';
import LoanPoolCreation from '@/pages/LoanPoolCreation/LoanPoolCreation';
import LoanPoolTimeline from './pages/LoanPoolTimeline/LoanPoolTimeline';
import DueDiligence from './pages/NBFCDueDiligence/DueDiligence';
import SelectPool from './pages/BSelectPool/SelectPool';
import { ViewLoanPool } from './pages/ViewLoanPool/ViewLoanPool';

// import UserManagement from '@/pages/Ums/UserManagement';
// import NbfcProfile from './pages/Ums/components/NbfcProfile';
// import UserList from './pages/Ums/components/UserList';
// import EditUserDetails from './pages/Ums/components/EditUserDetails';
import UmsTabs from './pages/Ums/UmsTabs';
import Profile from './pages/Ums/components/Profile';
import User from './pages/Ums/components/User';
import { LoanPoolCustomerDetails } from './pages/ViewLoanPool/CustomerDetails';
import { ProspectDetails } from './pages/ViewLoanPool/ProspectDetails';
import Statistics from './pages/ViewLoanPool/Statistics';
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
	{
		path: '/panel/*',
		element: (
			<Suspense>
				<BaseLayout />
			</Suspense>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'dashboard',
				element: (
					<Suspense fallback={'Loading ...'}>
						<Dashboard />
					</Suspense>
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
				path: 'select-pool',
				element: (
					<Suspense fallback={'Loading ...'}>
						<SelectPool />
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
			{
				path: 'view-loan-pool',
				element: (
					<Suspense fallback={'Loading...'}>
						<ViewLoanPool />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'customer-details',
				element: (
					<Suspense fallback={'Loading...'}>
						<LoanPoolCustomerDetails />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'prospect-details',
				element: (
					<Suspense fallback={'Loading...'}>
						<ProspectDetails />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'statistics',
				element: (
					<Suspense fallback={'Loading...'}>
						<Statistics />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
		],
	},
];
