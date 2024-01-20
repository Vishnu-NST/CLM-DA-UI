import { useMutation } from '@tanstack/react-query';
import LOSClient from '@/services/losClient';

const useCreatePoolFileUpload = () => {
	const losClient = new LOSClient('/pool/createpool');

	return useMutation({
		mutationFn: (data) => {
			losClient.createPoolFileUpload({ ...data });
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
