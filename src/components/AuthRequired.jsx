import DI from '@/hoc/DI';
import { useAppState } from '@/store/useAppState';
import * as utils from '@/utils/common';
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRequired = (props) => {
	const { app } = useAppState();

	const token = props.storage.getItem('accessToken');

	const decodedToken = utils.decodeToken(token);

	console.log(props);
	console.log(props.children.props.org);

	// if there is no token, redirect to login
	if (!decodedToken) {
		return <Navigate to="/sign-in" />;
	}

	const expirationTime = decodedToken.exp * 1000;

	console.log(decodedToken);
	// console.log(Date.now());
	// console.log(decodedToken.exp * 1000);
	// console.log(Date.now() > decodedToken.exp * 1000);

	// if token expired, redirect to login
	if (Date.now() > expirationTime) {
		return <Navigate to="/sign-in" />;
	}

	// const { user } = app;

	console.log(app);

	// if user_id, redirect to login
	// if (!user.userId) {
	// 	return <Navigate to="/sign-in" />;
	// }

	return <>{props.children}</>;
};

export default DI(AuthRequired);
