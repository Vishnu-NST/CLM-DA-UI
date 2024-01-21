// import APIClient from '@/services/apiClient';
import LOSClient from '@/services/losClient';
import { useQuery } from '@tanstack/react-query';
import { useAppState } from './useAppState';

const useDD = () => {
	const { app } = useAppState();

	return useQuery({
		queryKey: ['wsoToken'],
		queryFn: () => {
			const losClient = new LOSClient(
				`/pool/get_bank_due_diligence_pool/${app.user.userId}/${app.user.org_id}`,
			);
			return losClient.get();
		},
		// retry: 3,
		// staleTime: 1000 * 60 * 60 * 24,
		// refetchOnWindowFocus: false,
	});
};

export default useDD;
