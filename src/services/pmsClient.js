// import { getStorage } from '@/utils/common';
import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_PMS_BASE_URL,
});

// const storage = getStorage();

axiosInstance.interceptors.request.use(
	(config) => {
		config.headers = config.headers || {};

		// const wsoToken = storage.getItem('wsoToken');

		// if (wsoToken) {
		// 	config.headers['Authorization'] = `Bearer ${wsoToken}`;
		// }

		config.headers['Content-Type'] = 'application/json';

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

class PMSClient {
	constructor(endpoint) {
		this.endpoint = endpoint;
	}

	getProductList() {
		return axiosInstance.get(this.endpoint).then((res) => res.data);
	}

	getCreditRatings() {
		return axiosInstance.get(this.endpoint).then((res) => res.data);
	}
}

export default PMSClient;
