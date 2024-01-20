import { useMutation } from '@tanstack/react-query';
import LOSClient from '@/services/losClient';

const useDdQueryFileUpload = () => {
	const losClient = new LOSClient('/query/upload');

	return useMutation({
		mutationFn: (data) => {
			let formData = new FormData();
			formData.append('file', data?.file);
			formData.append('query_id', data?.query_id);
			return losClient.createPoolFileUpload(formData);
		},
		onSuccess: (data) => {
			if (data.error) {
				throw new Error(data.error[0].errorMessage);
			}
			return data;
		},
	});
};

export default useDdQueryFileUpload;
