import React, { Suspense } from 'react';

import ErrorPage from '@/components/Error/Error';
import AuthRequired from './components/AuthRequired';
import SignUpForm from './pages/Auth/SignUpForm';
import LoginPage from './pages/Auth/LoginForm';
import CreatePasswordForm from './pages/Auth/CreatePasswordForm';
import PasswordsetupLinkInfo from './pages/Auth/PasswordsetupLinkInfo';
import FortgotPasswordForm from './pages/Auth/ForgotPasswordForm';

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
		path: '/',
		element: <Suspense>{/* <Dhanam /> */}</Suspense>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/deposit-collect',
				element: (
					<Suspense fallback={'Loading ...'}>
						<>100</>
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: '/monitor',
				element: (
					<AuthRequired>
						<>100</>
					</AuthRequired>
				),
				errorElement: <ErrorPage />,
			},
		],
	},
];
