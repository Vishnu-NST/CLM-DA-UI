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
import SelectPool from './target/NBFC/pages/BSelectPool/SelectPool';

// import UserManagement from '@/pages/Ums/UserManagement';
// import NbfcProfile from './pages/Ums/components/NbfcProfile';
// import UserList from './pages/Ums/components/UserList';
// import EditUserDetails from './pages/Ums/components/EditUserDetails';
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

const nbfcPages = [
	{ text: 'Dashboard', to: 'dashboard', icon: <DashboardIcon /> },
	{ text: 'Create Loan Pool', to: 'lpc', icon: <LoanPoolIcon /> },
	{ text: 'Due Diligence', to: 'lpt', icon: <DueDeligenceIcon /> },
	{ text: 'Transaction', to: 'queries', icon: <CurrencyExchangeIcon /> },
	{ text: 'Pool Status', to: 'slp', icon: <PoolStatusIcon /> },
	{ text: 'Reports', to: 'reports', icon: <ReportIcon /> },
];

const bankPages = [
	{ text: 'Dashboard', to: 'dashboard', icon: <DashboardIcon /> },
	{ text: 'Select Product', to: 'lpc', icon: <LoanPoolIcon /> },
	{ text: 'My Pool List', to: 'lpt', icon: <DueDeligenceIcon /> },
	{ text: 'Due Diligence', to: 'queries', icon: <CurrencyExchangeIcon /> },
	{ text: 'Transaction', to: 'slp', icon: <PoolStatusIcon /> },
	{ text: 'Reports', to: 'reports', icon: <ReportIcon /> },
	{ text: 'Demand Collected', to: 'reports', icon: <ReportIcon /> },
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
						<>bakn dashboard</>
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: 'assetclass',
				element: (
					<Suspense fallback={'Loading ...'}>
						<AssetClassBank />
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
		],
	},
];
