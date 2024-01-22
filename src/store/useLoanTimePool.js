import LOSClient from '@/services/losClient';
import { useQuery } from '@tanstack/react-query';
import { useAppState } from './useAppState';

const useLoanTimePool = () => {
	const { app } = useAppState();
	console.log('app', app);

	return useQuery({
		queryKey: ['wsoToken'],
		queryFn: () => {
			const losClient = new LOSClient(
				`/pool/get_nbfc_loan_pool_timeline/${app.user.userId}/${1}`,
			);
			return losClient.get();
		},
	});
};

export default useLoanTimePool;
