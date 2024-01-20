import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_LOS_BASE_URL,
});

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

class LOSClient {
	constructor(endpoint) {
		this.endpoint = endpoint;
	}

	getViewLoanPoolList() {
		return axiosInstance.get(this.endpoint).then((res) => res.data);
	}

	deleteLoanPool(payload) {
		return axiosInstance.delete(this.endpoint, payload).then((res) => res.data);
	}

	getLoanPoolCustomerDetails() {
		return axiosInstance.get(this.endpoint).then((res) => res.data);
	}

	getLoanPoolProspectDetails() {
		return axiosInstance.get(this.endpoint).then((res) => res.data);
	}
}

export default LOSClient;
