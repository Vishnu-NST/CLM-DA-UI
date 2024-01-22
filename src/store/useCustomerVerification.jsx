// import APIClient from '@/services/apiClient';
import LOSClient from '@/services/losClient';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

const useCustomerVerification = () => {
	const params = useParams();
	return useQuery({
		queryKey: ['pool'],
		queryFn: () => {
			console.log({ params });
			const losClient = new LOSClient(
				`pool/get_bank_customer_verification/${params.poolId}?user_id=15263&skip=0&limit=100`,
			);

			return losClient.get({ id: 1 });
		},
	});
};

export default useCustomerVerification;
