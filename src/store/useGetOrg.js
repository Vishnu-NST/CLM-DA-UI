// import APIClient from '@/services/apiClient';
import UMSClient from '@/services/umsClient';
import { useQuery } from '@tanstack/react-query';
import { useAppState } from './useAppState';

const useGetOrg = () => {
	const { app } = useAppState();

	return useQuery({
		queryKey: ['getOrg'],
		queryFn: () => {
			const umsClient = new UMSClient(`/org/${app.user.org_id}`);
			return umsClient.get();
		},
	});
};

export default useGetOrg;
