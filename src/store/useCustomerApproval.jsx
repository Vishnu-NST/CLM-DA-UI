import LOSClient from '@/services/losClient';
import { useMutation } from '@tanstack/react-query';

const useLogin = () => {
	const losClient = new LOSClient(`/pool/update-pool-due-diligence-approved/`);

	return useMutation({
		mutationFn: (data) =>
			losClient.DDCustomerApproval({
				pool_id: data.poolId,
				kyc_verification: data.KYC,
				loan_agreement_verification: data.loanDoc,
				other_document_verification: data.otherDoc,
				is_approved: data.approval,
			}),
		onSuccess: (data) => {
			// console.log(data);
			if (data.error) {
				throw new Error(data.error[0].errorMessage);
			}
		},
	});
};

export default useLogin;
