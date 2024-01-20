import { useMutation } from '@tanstack/react-query';
import DemandClient from '@/services/demandClient';

const useDemandUpload = () => {
	const demandClient = new DemandClient('/upload/demand');

	return useMutation({
		mutationFn: (data) => {
			let formData = new FormData();
			formData.append('file', data);
			return demandClient.uploadDemandFile(formData);
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
