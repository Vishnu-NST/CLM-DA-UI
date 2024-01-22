import LOSClient from '@/services/losClient';
import { useQuery } from '@tanstack/react-query';

const useGetQueryDetail = (queryId) => {
	const losClient = new LOSClient(`/query/${queryId}`);
	return useQuery({
		queryKey: ['get_query_detail'],
		queryFn: () => losClient.getQueryDetail(),
		// retry: 3,
		// staleTime: 1000 * 60 * 60 * 24,
		// refetchOnWindowFocus: false,
	});
};

export default useGetQueryDetail;
