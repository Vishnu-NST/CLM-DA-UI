import OutlookClient from '@/services/outlookClient';
import { useMutation } from '@tanstack/react-query';

const useOutlook = () => {
	const oulookClient = new OutlookClient('/v1.0/me/sendMail');

	function getPayLoad(data) {
		const { firstName, lastName, email } = data;

		const subject = 'Meet for lunch?';
		const confirmationLink = `${location.origin}/create-password`;

		const content = `
Hi ${firstName} ${lastName}
This is a email confirmation.

Click the following link to confirm
${confirmationLink}
`;

		const payload = {
			message: {
				subject: subject,
				body: {
					contentType: 'Text',
					content: content,
				},
				toRecipients: [
					{
						emailAddress: {
							address: email,
						},
					},
				],
			},
		};

		return payload;
	}

	return useMutation({
		mutationFn: (data) => oulookClient.send(getPayLoad(data)),
	});
};

export default useOutlook;
