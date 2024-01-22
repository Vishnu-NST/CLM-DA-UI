import { create } from 'zustand';
// import { createJSONStorage } from	 'zustand/middleware';

import initialAppState from './intialAppState';
// import { getStorage } from '@/utils/common';

export const useAppState = create()(
	(set) => ({
		app: initialAppState,

		setUser: (user) =>
			set((state) => {
				return {
					...state,
					app: {
						...state.app,
						user: user,
					},
				};
			}),

		setLoading: (flag) =>
			set((state) => {
				return {
					...state,
					app: {
						...state.app,
						loading: flag,
					},
				};
			}),
	}),
	// {
	// 	name: 'userAppState', // name of the item in the storage (must be unique)
	// 	storage: createJSONStorage(() => getStorage()), // (optional) by default, 'localStorage' is used
	// },
);
