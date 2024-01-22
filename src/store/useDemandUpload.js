import { useMutation } from '@tanstack/react-query';
import LMSClient from '@/services/lmsClient';

const useDemandUpload = () => {
	const lmsClient = new LMSClient('/upload/demand');

	return useMutation({
		mutationFn: (data) => {
			let formData = new FormData();
			formData.append('file', data);
			return lmsClient.uploadDemandFile(formData);
		},
		onSuccess: (data) => {
			if (data.error) {
				throw new Error(data.error[0].errorMessage);
			}
			return data;
		},
	});
};

export default useDemandUpload;
