import React from 'react';
import Profile from './components/Profile';
import NbfcProfile from './components/NbfcProfile';

const ProfileOrProfileCreation = () => {
	const firstTime = true;

	if (firstTime) {
		return <Profile />;
	} else {
		return <NbfcProfile />;
	}
};

export default ProfileOrProfileCreation;
