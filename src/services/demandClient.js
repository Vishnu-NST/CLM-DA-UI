import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_DEMAND_BASE_URL,
});

axiosInstance.interceptors.request.use(
	(config) => {
		config.headers = config.headers || {};

		// const wsoToken = storage.getItem('wsoToken');

		// if (wsoToken) {
		// 	config.headers['Authorization'] = `Bearer ${wsoToken}`;
		// }

		// config.headers['Content-Type'] = 'application/json';

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

class DemandClient {
	constructor(endpoint) {
		this.endpoint = endpoint;
	}

	uploadDemandFile(payload) {
		return axiosInstance
			.post(this.endpoint, payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => res.data);
	}

	uploadCollectionFile(payload) {
		return axiosInstance
			.post(this.endpoint, payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => res.data);
	}
}

export default DemandClient;
