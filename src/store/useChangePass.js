import UMSClient from '@/services/umsClient';
import { useMutation } from '@tanstack/react-query';

const useChangePass = () => {
	const umsClient = new UMSClient('/v1.0/me/sendMail');

	return useMutation({
		mutationFn: (data) => umsClient.changePassword(data),
	});
};

export default useChangePass;
