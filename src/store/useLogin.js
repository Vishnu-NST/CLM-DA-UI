import UMSClient from '@/services/umsClient';
import { useMutation } from '@tanstack/react-query';
import { useAppState } from './useAppState';

const useLogin = () => {
	const umsClient = new UMSClient('/user/login');
	const { setUser } = useAppState();

	return useMutation({
		mutationFn: (data) =>
			umsClient.login({
				username: data.username,
				password: data.password,
			}),
		onSuccess: (data) => {
			// console.log(data);
			if (data.error) {
				throw new Error(data.error[0].errorMessage);
			}
			setUser(data.result);
		},
	});
};

export default useLogin;
