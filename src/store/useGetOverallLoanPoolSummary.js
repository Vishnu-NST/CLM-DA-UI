
// import APIClient from '@/services/apiClient';
import LMSClient from '@/services/lmsClient';
import { useQuery } from '@tanstack/react-query';
 
const lmsClient = new LMSClient('/bank/summary?bankID=bank-1');
 
const useGetOverallLoanPoolSummary = () => {
    return useQuery({
        queryKey: ['get_overall_loan_pool_summary'],
        queryFn: () => lmsClient.getOverallLoanPoolSummary(),
        // retry: 3,
        // staleTime: 1000 * 60 * 60 * 24,
        // refetchOnWindowFocus: false,
    });
};
 
export default useGetOverallLoanPoolSummary;