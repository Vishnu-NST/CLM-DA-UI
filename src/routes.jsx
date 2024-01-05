import React, { Suspense } from 'react';

import ErrorPage from '@/components/Error/Error';
import AuthRequired from './components/AuthRequired';
import SignUpForm from './pages/Auth/SignUpForm';
import LoginPage from './pages/Auth/LoginForm';
import CreatePasswordForm from './pages/Auth/CreatePasswordForm';
import PasswordsetupLinkInfo from './pages/Auth/PasswordsetupLinkInfo';
import FortgotPasswordForm from './pages/Auth/ForgotPasswordForm';
import BaseLayout from '@/components/BaseLayout';
import Stats from '@/pages/Stats/Stats';
import LoanPoolCreation from '@/pages/LoanPoolCreation/LoanPoolCreation';
import LoanPoolTimeline from './pages/LoanPoolTimeline/LoanPoolTimeline';

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
		path: '/dash',
		element: <BaseLayout />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/dashboard/*',
		element: (
			<Suspense>
				<BaseLayout />
			</Suspense>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'stats',
				element: (
					<Suspense fallback={'Loading ...'}>
						<Stats />
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
		],
	},
];
