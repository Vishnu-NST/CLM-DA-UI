import UMSClient from '@/services/umsClient';
import { useQuery } from '@tanstack/react-query';

const useGetUsers = () => {
	return useQuery({
		queryKey: ['getOrg'],
		queryFn: () => {
			const umsClient = new UMSClient(`/user`);
			return umsClient.get();
		},
	});
};

export default useGetUsers;
