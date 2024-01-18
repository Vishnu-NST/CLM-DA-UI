let initialAppState = {
	loading: false,
	user: {},
};

const customAppState = {};

switch (import.meta.env.MODE) {
	case 'development':
		initialAppState = Object.assign(initialAppState, customAppState);
		break;
	case 'production':
		initialAppState = Object.assign(initialAppState, customAppState);
		break;
}

export default initialAppState;
