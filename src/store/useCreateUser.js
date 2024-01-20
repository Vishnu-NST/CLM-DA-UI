import UMSClient from '@/services/umsClient';
import { useMutation } from '@tanstack/react-query';
import { useAppState } from './useAppState';

const useCreateUser = () => {
	const umsClient = new UMSClient('/user');

	const { app } = useAppState();

	return useMutation({
		mutationFn: (data) =>
			umsClient.post({
				user_id: '0',
				user_name: data.userName,
				logo_url: 'http://logo.url',
				// password: '123dsfaf24351',
				org_id: app.user.org_id,
				org_type: app.user.org_type,
				official_email: data.userOfficialEmailAdderss,
				role_id: data.userRole,
				mobile_number: '' + data.mobileNumber,
				address_one: data.addressOne,
				address_two: data.addressTwo,
				state: data.state,
				city: data.city,
				pincode: '' + data.pinCode,
				// is_active: false,
				// is_logged: false,
			}),
		onSuccess: (data) => {
			console.log(data);
			// if (data.error) {
			// 	throw new Error(data.error[0].errorMessage);
			// }
			// setUser(data.result);
		},
	});
};

export default useCreateUser;
