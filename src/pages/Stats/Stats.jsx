import { useAppState } from '@/store/useAppState';
import React from 'react';

const Stats = () => {
	const app = useAppState();
	console.log(app);
	return <div>Stats</div>;
};

export default Stats;
