import LOSClient from '@/services/losClient';
import { useMutation } from '@tanstack/react-query';

const useDeleteLoanPool = () => {
	return useMutation({
		mutationFn: (data) =>
			new LOSClient(`/pool/deletepool/${data}`).deleteLoanPool(),
		onSuccess: (data) => {
			if (data.error) {
				throw new Error(data.error[0].errorMessage);
			}
			return data;
		},
	});
};

export default useDeleteLoanPool;
