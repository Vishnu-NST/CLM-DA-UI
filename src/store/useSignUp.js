import UMSClient from '@/services/umsClient';
import { useMutation } from '@tanstack/react-query';

const useSignup = () => {
	const umsClient = new UMSClient('/signup');

	return useMutation({
		mutationFn: (data) =>
			umsClient.signup({
				first_name: data.firstName,
				last_name: data.lastName,
				official_email: data.email,
			}),
	});
};

export default useSignup;
