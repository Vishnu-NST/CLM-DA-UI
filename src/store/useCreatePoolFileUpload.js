import { useMutation } from '@tanstack/react-query';
import LOSClient from '@/services/losClient';

const useCreatePoolFileUpload = () => {
	const losClient = new LOSClient('/pool/createpool-fileupload/');

	return useMutation({
		mutationFn: (data) => {
			console.log('datadatadata', data);
			let formData = new FormData();
			formData.append('file', data?.file);
			formData.append('pool_id', data?.pool_id);
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

export default useCreatePoolFileUpload;
