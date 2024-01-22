// import APIClient from '@/services/apiClient';
import LMSClient from '@/services/lmsClient';
import { useQuery } from '@tanstack/react-query';
 
const lmsClient = new LMSClient('/bank/pools?bankID=bank-1');
 
const useGetLoanPoolMonitoringList = () => {
    return useQuery({
        queryKey: ['get_loan_pool_monitoring_list'],
        queryFn: () => lmsClient.getLoanPoolMonitoringList(),
        // retry: 3,
        // staleTime: 1000 * 60 * 60 * 24,
        // refetchOnWindowFocus: false,
    });
};
 
export default useGetLoanPoolMonitoringList;