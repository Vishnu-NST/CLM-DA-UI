// import APIClient from '@/services/apiClient';
import LOSClient from '@/services/losClient';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useGetLoanPoolProspectDetails = () => {
	const params = useParams();

	return useQuery({
		queryKey: ['get_loan_pool_prospect_details'],
		queryFn: () => {
			const losClient = new LOSClient(
				`/pool/get_detail/${params?.customerId}/${params?.poolId}?skip=0&limit=100`,
			);
			return losClient.get();
		},
	});
};

export default useGetLoanPoolProspectDetails;
