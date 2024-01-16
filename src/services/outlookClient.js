import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_OUTLOOK_BASE_URL,
});

axiosInstance.interceptors.request.use(
	(config) => {
		config.headers = config.headers || {};

		config.headers['Authorization'] = `Bearer ${
			import.meta.env.VITE_OUTLOOK_AUTH_TOKEN
		}`;

		config.headers['Content-Type'] = 'application/json';

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

class OutlookClient {
	constructor(endpoint) {
		this.endpoint = endpoint;
	}

	send(payload) {
		return axiosInstance.post(this.endpoint, payload).then((res) => res.data);
	}
}

export default OutlookClient;
