import DI from '@/NBFC/hoc/DI';
import { useAppState } from '@/NBFC/store/useAppState';
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRequired = (props) => {
	const { app } = useAppState();

	const user = {
		loggedin: true,
		role: 'nbfc',
	};

	if (!user.loggedin) {
		return <Navigate to="/sign-in" />;
	}

	return <>{props.children}</>;
};

export default DI(AuthRequired);