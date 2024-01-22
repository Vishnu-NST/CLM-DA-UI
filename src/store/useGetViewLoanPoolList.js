// import APIClient from '@/services/apiClient';
import LOSClient from '@/services/losClient';
import { useQuery } from '@tanstack/react-query';
 
const losClient = new LOSClient('/pool/get_pools?skip=0&limit=100');
 
const useGetViewLoanPoolList = () => {
    return useQuery({
        queryKey: ['get_view_loan_pool_list'],
        queryFn: () => losClient.getViewLoanPoolList(),
        // retry: 3,
        // staleTime: 1000 * 60 * 60 * 24,
        // refetchOnWindowFocus: false,
    });
};
 
export default useGetViewLoanPoolList;