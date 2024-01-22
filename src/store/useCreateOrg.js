import UMSClient from '@/services/umsClient';
import { useMutation } from '@tanstack/react-query';
import { useAppState } from './useAppState';

const useCreateOrg = () => {
	const umsClient = new UMSClient('/org');

	const { app } = useAppState();

	return useMutation({
		mutationFn: (data) =>
			umsClient.createOrg({
				org_name: data.nbfcName,
				org_type: app.user.org_type,
				org_email: data.nbfcEmailAdderss,
				cin_number: '' + data.cinNumber,
				logo_url: 'http://logo.example.com',
				registration_number: '' + data.registrationNumber,
				dateof_incorporation: data.dateOfIncorporation,
				class_of_company: data.classOfCompany,
				number_of_employees: '' + data.noOfEmployees,
				css_score: '' + data.ccsScore,
				credit_rating: '' + data.creditRatings,
				overview: data.overview,
				address_one: data.nbfcaddressOne,
				address_two: data.nbfcaddressTwo,
				state: data.profileStateAttribute,
				city: data.profileCity,
				pincode: '' + data.profilePincode,
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

export default useCreateOrg;
