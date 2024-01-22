// import APIClient from '@/services/apiClient';
import LOSClient from '@/services/losClient';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useGetViewLoanPoolCustomerDetails = () => {
	const params = useParams();
	const losClient = new LOSClient(
		`/pool/get_prospect_details/${params?.poolId}?skip=0&limit=100`,
	);
	return useQuery({
		queryKey: ['get_view_loan_pool_customer_details'],
		queryFn: () => losClient.getLoanPoolCustomerDetails(),
		// retry: 3,
		// staleTime: 1000 * 60 * 60 * 24,
		// refetchOnWindowFocus: false,
	});
};

export default useGetViewLoanPoolCustomerDetails;
