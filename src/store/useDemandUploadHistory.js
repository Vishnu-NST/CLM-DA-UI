// import APIClient from '@/services/apiClient';
import LMSClient from '@/services/lmsClient';
import { useQuery } from '@tanstack/react-query';

const useDemandUploadHistory = (type) => {
	const lmsClient = new LMSClient(`/upload/history?doc=${type}`);
	return useQuery({
		queryKey: ['get_upload_history'],
		queryFn: () => lmsClient.getUploadHistoryForDemand(),
		// retry: 3,
		// staleTime: 1000 * 60 * 60 * 24,
		// refetchOnWindowFocus: false,
	});
};

export default useDemandUploadHistory;
