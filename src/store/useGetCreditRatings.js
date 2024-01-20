// import APIClient from '@/services/apiClient';
import PMSClient from '@/services/pmsClient';
import { useQuery } from '@tanstack/react-query';

const pmsClient = new PMSClient('/credit_ratings/get_all_credit_ratings');

const useGetCreditRatings = () => {
	return useQuery({
		queryKey: ['get_credit_ratings'],
		queryFn: () => pmsClient.getCreditRatings(),
		// retry: 3,
		// staleTime: 1000 * 60 * 60 * 24,
		// refetchOnWindowFocus: false,
	});
};

export default useGetCreditRatings;
