import { useMutation } from '@tanstack/react-query';
import LOSClient from '@/services/losClient';

const useCreateQuery = () => {
	const losClient = new LOSClient('/query');

	return useMutation({
		mutationFn: (data) => {
			return losClient.createQueryForDd(data);
		},
		onSuccess: (data) => {
			if (data?.error) {
				throw new Error(data.error[0].errorMessage);
			}
			return data;
		},
	});
};

export default useCreateQuery;
