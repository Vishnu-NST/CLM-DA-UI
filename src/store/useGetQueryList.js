import LOSClient from '@/services/losClient';
import { useQuery } from '@tanstack/react-query';

const useGetQueryList = () => {
	const userOrgId = window.localStorage.getItem('userOrgId');
	const losClient = new LOSClient(`/bank/query/${userOrgId}`);
	return useQuery({
		queryKey: ['get_query_list'],
		queryFn: () => losClient.getQueryList(),
		// retry: 3,
		// staleTime: 1000 * 60 * 60 * 24,
		// refetchOnWindowFocus: false,
	});
};

export default useGetQueryList;
