import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router';
import LOSClient from '@/services/losClient';

const useCustomerVerification = () => {
	const params = useParams();

	const { data, isError, isSuccess, error } = useQuery({
		queryKey: ['pool'],
		queryFn: () => {
			console.log({ params });
			const losClient = new LOSClient(
				`pool/get_bank_customer_verification/${params.poolId}?user_id=15263&skip=0&limit=100`,
			);

			return losClient.get({ id: 1 });
		},
	});

	const mutation = useMutation({
		mutationFn: (data) =>
			LOSClient.post({
				pool_id: data.poolId,
				kyc_verification: data.KYC,
				loan_agreement_verification: data.loanDoc,
				other_document_verification: data.otherDoc,
				is_approved: data.approval,
			}),
	});

	return { data, isError, isSuccess, error, mutation };
};

export default useCustomerVerification;
