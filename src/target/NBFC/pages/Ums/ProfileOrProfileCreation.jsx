import React from 'react';
import ProfileCreation from './components/ProfileCreation';
import ProfileDetails from './components/ProfileDetails';

const ProfileOrProfileCreation = () => {
	const firstTime = true;

	if (firstTime) {
		return <ProfileCreation />;
	} else {
		return <ProfileDetails />;
	}
};

export default ProfileOrProfileCreation;
