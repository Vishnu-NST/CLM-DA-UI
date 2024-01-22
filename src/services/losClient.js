/* eslint-disable no-unused-vars */
// import { getStorage } from '@/utils/common';
import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_LOS_BASE_URL,
});

// const storage = getStorage();

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

	post(payload) {
		return axiosInstance.post(this.endpoint, payload).then((res) => res.data);
	}

	get(payload) {
		return axiosInstance.get(this.endpoint, payload).then((res) => res.data);
	}

	put(payload) {
		return axiosInstance.put(this.endpoint, payload).then((res) => res.data);
	}

	getCustomerVerificationDetails(payload) {
		return axiosInstance.get(this.endpoint, payload).then((res) => res.data);
	}

	createPool(payload) {
		return axiosInstance.post(this.endpoint, payload).then((res) => res.data);
	}

	createPoolFileUpload(payload) {
		return axiosInstance
			.post(this.endpoint, payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => res.data);
	}

	getQueryList() {
		return axiosInstance.get(this.endpoint).then((res) => res.data);
	}

	getQueryDetail() {
		return axiosInstance.get(this.endpoint).then((res) => res.data);
	}
	DDCustomerApproval(payload) {
		return;
	}
	createQueryForDd(payload) {
		return axiosInstance.post(this.endpoint, payload).then((res) => res.data);
	}
}

export default LOSClient;
