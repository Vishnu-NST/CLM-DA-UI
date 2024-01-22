import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './BankDueDiligence.scss';
import useCustomerVerification from '@/store/useCustomerVerification';
import useCustomerApproval from '@/store/useCustomerApproval';
import HeaderComp from '@/components/HeaderComponent';
const CustomerVerification = () => {
	const data = [
		{
			pool_id: 'POOL-52',
			name: 'JLG January 20 - 01',
			createdOn: '2024-01-20T09:06:57.478275',
			nbfc_logo: 'N/A',
			aum: '50',
			credit_ratings: 'AA+',
			irr: '12',
			days_left_until_closure: 10,
			kyc_verification: true,
			loan_agreement_verification: true,
			other_document_verification: true,
		},
		{
			pool_id: 'POOL-65',
			name: 'JLG January 20',
			createdOn: '2024-01-20T10:24:45.931020',
			nbfc_logo: 'N/A',
			aum: '50',
			credit_ratings: 'A+',
			irr: '10',
			days_left_until_closure: 10,
			kyc_verification: null,
			loan_agreement_verification: null,
			other_document_verification: null,
		},
		{
			pool_id: 'POOL-66',
			name: 'MNG January 20',
			createdOn: '2024-01-20T10:25:14.053671',
			nbfc_logo: 'N/A',
			aum: '50',
			credit_ratings: 'A+',
			irr: '10',
			days_left_until_closure: 10,
			kyc_verification: null,
			loan_agreement_verification: null,
			other_document_verification: null,
		},
		{
			pool_id: 'POOL-67',
			name: 'MNG January 20',
			createdOn: '2024-01-20T10:29:13.806976',
			nbfc_logo: 'N/A',
			aum: '50',
			credit_ratings: 'A+',
			irr: '10',
			days_left_until_closure: 10,
			kyc_verification: null,
			loan_agreement_verification: null,
			other_document_verification: null,
		},
		{
			pool_id: 'POOL-68',
			name: 'MNG January 20',
			createdOn: '2024-01-20T10:29:33.374712',
			nbfc_logo: 'N/A',
			aum: '50',
			credit_ratings: 'A+',
			irr: '10',
			days_left_until_closure: 10,
			kyc_verification: null,
			loan_agreement_verification: null,
			other_document_verification: null,
		},
		{
			pool_id: 'POOL-69',
			name: 'MNG January 20',
			createdOn: '2024-01-20T10:29:53.354104',
			nbfc_logo: 'N/A',
			aum: '50',
			credit_ratings: 'A+',
			irr: '10',
			days_left_until_closure: 10,
			kyc_verification: null,
			loan_agreement_verification: null,
			other_document_verification: null,
		},
		{
			pool_id: 'POOL-70',
			name: 'MNG January 20',
			createdOn: '2024-01-20T10:29:57.800649',
			nbfc_logo: 'N/A',
			aum: '50',
			credit_ratings: 'A+',
			irr: '10',
			days_left_until_closure: 10,
			kyc_verification: null,
			loan_agreement_verification: null,
			other_document_verification: null,
		},
		{
			pool_id: 'POOL-71',
			name: 'MNG January 20',
			createdOn: '2024-01-20T10:30:16.734987',
			nbfc_logo: 'N/A',
			aum: '50',
			credit_ratings: 'A+',
			irr: '10',
			days_left_until_closure: 10,
			kyc_verification: null,
			loan_agreement_verification: null,
			other_document_verification: null,
		},
		{
			pool_id: 'POOL-72',
			name: 'MNG January 20',
			createdOn: '2024-01-20T10:30:31.932901',
			nbfc_logo: 'N/A',
			aum: '50',
			credit_ratings: 'A+',
			irr: '10',
			days_left_until_closure: 10,
			kyc_verification: null,
			loan_agreement_verification: null,
			other_document_verification: null,
		},
	];
	const cusVerification = useCustomerVerification();
	const cusApproval = useCustomerApproval();
	const datas = cusVerification.data ? cusVerification.data : [];
	console.log('datas', datas);

	const initialState = () => {
		return data.map((item) => ({
			kyc_verification: item.kyc_verification === true,
			loan_agreement_verification: item.loan_agreement_verification === true,
			other_document_verification: item.other_document_verification === true,
		}));
	};

	const [checkboxStates, setCheckboxStates] = useState(initialState);
	const [approval, setApproval] = useState(false);

	const handleCheckboxChange = (index, checkboxType, poolId) => {
		setCheckboxStates((prevStates) => {
			const newStates = [...prevStates];
			newStates[index] = {
				...newStates[index],
				[checkboxType]: !newStates[index][checkboxType],
			};
			// console.log(
			// 	` [${poolId} "KYC Verfication:"${newStates[index].kyc_verification},"Loan Application Verfication" :${newStates[index].loan_agreement_verification}, "Other Documents Verification" :${newStates[index].other_document_verification}]`,
			// );

			handlePool(
				poolId,
				`${newStates[index].kyc_verification}`,
				`${newStates[index].loan_agreement_verification}`,
				`${newStates[index].other_document_verification}`,
			);
			return newStates;
		});
	};

	const handlePool = (poolId, KYC, loanDoc, otherDoc) => {
		handlePoolApproval({
			pool_id: poolId,
			kyc_verification: KYC,
			loan_agreement_verification: loanDoc,
			other_document_verification: otherDoc,
			is_approved: approval,
		});
	};

	async function handlePoolApproval(payload) {
		setApproval(true);
		cusApproval.mutate(payload);
	}

	const getBackgroundImage = (daysLeft) => {
		if (daysLeft >= 20 && daysLeft <= 30) {
			return 'linear-gradient(to bottom, #bbefd6, #ffffff)';
		} else if (daysLeft >= 10 && daysLeft < 20) {
			return 'linear-gradient(to bottom, #f1c4a4, #ffffff)';
		} else if (daysLeft >= 0 && daysLeft < 10) {
			return 'linear-gradient(to bottom, #ee6065, #ffffff)';
		}
		return 'linear-gradient(to bottom, #FBC39A, #ffffff)';
	};

	const getFontColor = (daysLeft) => {
		if (daysLeft >= 20 && daysLeft <= 30) {
			return '#00B85E';
		} else if (daysLeft >= 10 && daysLeft < 20) {
			return '#F78736';
		} else if (daysLeft >= 0 && daysLeft < 10) {
			return '#C4161C';
		}
		return '#FBC39A';
	};

	if (cusVerification.isError) {
		console.log(cusVerification.error);
	}

	if (cusVerification.isSuccess) {
		console.log(cusVerification.data);
	}

	const navigate = useNavigate();

	const handleQueryPath = () => {
		navigate('/bank/panel/Query');
	};

	console.log('checkboxStates', checkboxStates);
	const styleTypo = {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#f8f9fb',
		padding: '0px 30px',
		borderRadius: '15px',
		fontSize: '1rem',
	};

	return (
		<>
			<HeaderComp title={'Due Diligence'} />
			<Box sx={{ padding: '1.8rem 2rem', backgroundColor: '#ffffff' }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						marginBottom: '3rem',
					}}
				>
					<Typography>Customer Verification</Typography>
					<Button variant="outlined" onClick={handleQueryPath}>
						View Your Queries <NavigateNextSharpIcon />
					</Button>
				</Box>

				{data.map((item, index) => (
					// console.log("hi")
					<React.Fragment key={index}>
						{item && (
							<Box className="bankDD-search">
								<Box className="flex flexDirectionColunm">
									<Typography
										variant="body1"
										style={{ fontSize: '0.875rem' }}
									>
										{item.name}
									</Typography>
									<Typography
										variant="body2"
										style={{ fontSize: '0.6875rem' }}
									>
										Added on 15th April
									</Typography>
								</Box>
								<Box>
									<Typography
										style={{
											fontSize: '0.75rem',
											padding: '5px 20px',
											borderRadius: '35px',
											backgroundImage:
												'linear-gradient(to bottom, #8794C2, #ffffff)',
										}}
									>
										LOGO
									</Typography>
								</Box>
								<Box display="flex" flexDirection="column">
									<Typography style={{ fontSize: '0.875rem' }}>
										{item.aum}
									</Typography>
									<Typography style={{ fontSize: '0.6875rem' }}>
										AUM
									</Typography>
								</Box>
								<Box display="flex" flexDirection="column">
									<Typography
										style={{
											fontSize: '0.875rem',
											color: '#00B85E',
										}}
									>
										{item.credit_ratings}
									</Typography>
									<Typography style={{ fontSize: '0.6875rem' }}>
										Credit Ratings
									</Typography>
								</Box>
								<Box display="flex" flexDirection="column">
									<Typography style={{ fontSize: '0.875rem' }}>
										{item.irr}
									</Typography>
									<Typography style={{ fontSize: '0.6875rem' }}>
										Average IRR
									</Typography>
								</Box>
								<Box>
									<Typography
										style={{
											fontSize: '0.75rem',
											padding: '5px 20px',
											borderRadius: '35px',
											backgroundImage: getBackgroundImage(
												item.days_left_until_closure,
											),
											color: getFontColor(
												item.days_left_until_closure,
											),
										}}
									>
										{item.days_left_until_closure} days left
									</Typography>
								</Box>
								<Box>
									<Typography
										style={{
											cursor: 'pointer',
											fontSize: '0.875rem',
											display: 'flex',
											color: '#C4161C',
										}}
									>
										Customer details
										<NavigateNextSharpIcon
											style={{ marginTop: '-3px' }}
										/>
									</Typography>
								</Box>
							</Box>
						)}

						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-around',
								marginY: '2rem',
							}}
						>
							<Box sx={styleTypo}>
								<Checkbox
									checked={
										checkboxStates[index]?.kyc_verification ||
										false
									}
									onChange={() =>
										handleCheckboxChange(
											index,
											'kyc_verification',
											String(item.pool_id),
										)
									}
								/>
								<Box ml={1}>KYC Verification</Box>
							</Box>
							<Box sx={styleTypo}>
								<Checkbox
									checked={
										checkboxStates[index]
											?.loan_agreement_verification || false
									}
									onChange={() =>
										handleCheckboxChange(
											index,
											'loan_agreement_verification',
											String(item.pool_id),
										)
									}
								/>
								<Box ml={1}>Loan Application Verification</Box>
							</Box>
							<Box sx={styleTypo}>
								<Checkbox
									checked={
										checkboxStates[index]
											?.other_document_verification || false
									}
									onChange={() =>
										handleCheckboxChange(
											index,
											'other_document_verification',
											String(item.pool_id),
										)
									}
								/>
								<Box ml={1}>Other Documents Verification</Box>
							</Box>
						</Box>
					</React.Fragment>
				))}

				<Box sx={{ marginBottom: '4rem' }}>
					<Box className="item-1">
						<Box
							className="item-2"
							// style={{ display: 'flex', alignItems: 'center' }}
						>
							<Box className="icon">
								<HelpOutlineIcon
									className="helpOutlineIcon"
									fontSize="small"
								/>
							</Box>
							<span>Raise the Query with NBFC Click Here</span>
						</Box>
					</Box>
				</Box>
			</Box>
			<Grid
				sx={{ margin: '1rem -3rem' }}
				container
				justifyContent="flex-end"
				spacing={4}
			>
				<Grid
					item
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						marginBottom: '3rem',
					}}
				>
					<Button sx={{ fontSize: '0.875rem' }} variant="outlined">
						Reject
					</Button>
				</Grid>

				<Grid
					item
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						marginBottom: '3rem',
					}}
				>
					<Button
						sx={{
							color: '#ffffff',
							backgroundColor: '#C4161C',
							fontSize: '0.875rem',
							'&:hover': {
								backgroundColor: '#C4161C',
							},
						}}
						variant="outlined"
						onClick={handlePoolApproval}
					>
						Approve <NavigateNextSharpIcon />
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export default CustomerVerification;
