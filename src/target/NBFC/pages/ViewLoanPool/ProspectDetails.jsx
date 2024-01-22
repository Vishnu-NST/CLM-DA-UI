import {
	Card,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ProfilePicture from '@/assets/svg/ProspectDummy.png';
import HeaderComp from '@/components/HeaderComponent';
import useGetLoanPoolProspectDetails from '@/store/useGetLoanPoolProspectDetails';

const breadCrumbs = [
	{
		data: 'Menu',
		path: null,
	},
	{
		data: 'loan pool creation',
		path: '/nbfc/panel/lpc/create',
	},
	{
		data: 'loan pool details',
		path: '/nbfc/panel/lpc/view',
	},
	{
		data: 'customer details',
		path: '/nbfc/panel/customer-details	',
	},
	{
		data: 'manish easwar',
		path: null,
	},
];

export const ProspectDetails = () => {
	console.log('called');
	const dataQuery = useGetLoanPoolProspectDetails();

	console.log(dataQuery.data);

	if (dataQuery.isError) {
		//
	}

	let prospectDetails;

	if (dataQuery.isSuccess) {
		prospectDetails = dataQuery.data[0];
	}

	return (
		<>
			<HeaderComp title={'XYZ_123'} breadCrumbs={breadCrumbs} />
			<div style={{ margin: '1rem' }}>
				<div
					style={{
						padding: '1.5rem',
						backgroundColor: 'white',
						border: '1px solid rgba(135, 148, 194, 0.2)',
						borderRadius: '1.25rem',
					}}
				>
					<Card
						elevation={0}
						sx={{
							width: 'auto',
							padding: '1.875rem',
							borderRadius: '1.25rem',
							backgroundColor: '#F8F9FB',
							border: '1px solid rgba(135, 148, 194, 0.20)',
							height: 'auto',
						}}
					>
						<Grid container>
							<Grid item xs={2} align="left">
								<img
									style={{
										width: '10rem',
										height: '8rem',
										borderRadius: '1.25rem',
									}}
									src={ProfilePicture}
								/>
							</Grid>
							<Grid item xs={9} align="left">
								<Grid container>
									<Grid item xs={12}>
										<Typography
											sx={{
												fontFamily: 'Poppins, sans-serif',
												fontSize: '1.375rem',
												color: '#1B1B1B',
												fontWeight: 500,
												mb: 3,
											}}
										>
											{prospectDetails?.name}
										</Typography>
									</Grid>
									<Grid item xs={3.5}>
										<Card
											elevation={0}
											sx={{
												height: '4rem',
												width: '13.4375rem',
												borderRadius: '0.5rem',
												border: '1px solid rgba(135, 148, 194, 0.2)',
											}}
										>
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													color: '#C4161C',
													fontWeight: 500,
													ml: 3,
													mt: 1,
												}}
											>
												{prospectDetails?.customer_id}
											</Typography>
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													color: '#8794C2',
													fontWeight: 500,
													ml: 3,
													mt: 1,
												}}
											>
												IREP Customer ID
											</Typography>
										</Card>
									</Grid>
									<Grid item xs={3.5}>
										<Card
											elevation={0}
											sx={{
												height: '4rem',
												width: '13.4375rem',
												borderRadius: '0.5rem',
												border: '1px solid rgba(135, 148, 194, 0.2)',
											}}
										>
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													color: '#C4161C',
													fontWeight: 500,
													ml: 3,
													mt: 1,
												}}
											>
												{
													prospectDetails?.loan_account_number
												}
											</Typography>
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													color: '#8794C2',
													fontWeight: 500,
													ml: 3,
													mt: 1,
												}}
											>
												IREP Loan Account Number
											</Typography>
										</Card>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Card>
					<br />
					<Card
						elevation={0}
						sx={{
							width: 'auto',
							padding: '1.875rem',
							borderRadius: '1.25rem',
							backgroundColor: '#F8F9FB',
							height: 'auto',
							border: '1px solid rgba(135, 148, 194, 0.20)',
						}}
					>
						<Grid container spacing={0}>
							<Grid item xs={6}>
								<Typography
									sx={{
										fontFamily: 'Poppins, sans-serif',
										fontSize: '1.125rem',
										color: '#1B1B1B',
										fontWeight: 600,
										mb: 3,
									}}
								>
									Documents
								</Typography>
							</Grid>
							<Grid item xs={6} align="right">
								<FileUploadOutlinedIcon color="error" />
							</Grid>
						</Grid>
						<Typography
							align="center"
							sx={{
								fontFamily: 'Poppins, sans-serif',
								fontSize: '1.375rem',
								fontWeight: 600,
								color: '#1B1B1B',
							}}
						>
							No Document Found
						</Typography>
						<Typography
							align="center"
							sx={{
								fontFamily: 'Poppins, sans-serif',
								fontSize: '0.875rem',
								fontWeight: 400,
								color: '#8794C2',
							}}
						>
							There seems to be no document available to show,
						</Typography>
						<Typography
							align="center"
							sx={{
								fontFamily: 'Poppins, sans-serif',
								fontSize: '0.875rem',
								fontWeight: 400,
								color: '#8794C2',
							}}
						>
							Try to upload.
						</Typography>
					</Card>
					<br />
					<Card
						elevation={0}
						sx={{
							width: 'auto',
							padding: '1.875rem',
							borderRadius: '1.25rem',
							backgroundColor: '#F8F9FB',
							height: 'auto',
							border: '1px solid rgba(135, 148, 194, 0.20)',
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Poppins, sans-serif',
								fontSize: '1.125rem',
								color: '#1B1B1B',
								fontWeight: 600,
								mb: 3,
							}}
						>
							Basic Info
						</Typography>
						<Grid container spacing={3}>
							<Grid item xs={2} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{new Date(
										prospectDetails?.dob,
									).toLocaleDateString()}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									DOB
								</Typography>
							</Grid>
							<Grid item xs={2} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.pan_no}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Pan No.
								</Typography>
							</Grid>
							<Grid item xs={2} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.age}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Age
								</Typography>
							</Grid>
							<Grid item xs={2} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.educational_qualification}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Educational Qualification
								</Typography>
							</Grid>
							<Grid item xs={2} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.gender}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Gender
								</Typography>
							</Grid>
							<Grid item xs={2} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.marital_status}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Marital Status
								</Typography>
							</Grid>
							<Grid item xs={2} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.father_name}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Father&apos;s Name
								</Typography>
							</Grid>
							<Grid item xs={2} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.mother_name}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Mother&apos;s Name
								</Typography>
							</Grid>
							<Grid item xs={2} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.spouse_name}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Spouse Name
								</Typography>
							</Grid>
							<Grid item xs={2} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.profession}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Profession
								</Typography>
							</Grid>
							<Grid item xs={2} align="left">
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.annual_income}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Annual Income
								</Typography>
							</Grid>
						</Grid>
					</Card>
					<br />
					<Grid container>
						<Grid item xs={4}>
							<Card
								elevation={0}
								sx={{
									width: 'auto',
									padding: '1.875rem',
									borderRadius: '1.25rem',
									backgroundColor: '#F8F9FB',
									height: 'auto',
									border: '1px solid rgba(135, 148, 194, 0.20)',
								}}
							>
								<Typography
									sx={{
										fontFamily: 'Poppins, sans-serif',
										fontSize: '1.125rem',
										color: '#1B1B1B',
										fontWeight: 600,
										mb: 3,
									}}
								>
									Contact Info
								</Typography>
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.mobile_number}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Mobile Number
								</Typography>
								<br />
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.kyc_address}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									KYC Address
								</Typography>
								<br />
								<Typography
									sx={{
										color: '#1B1B1B',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{prospectDetails?.communication_address}
								</Typography>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.75rem',
										fontWeight: 400,
									}}
								>
									Communication Address
								</Typography>
							</Card>
						</Grid>
						<Grid item xs={0.3}></Grid>
						<Grid item xs={7.7}>
							<Card
								elevation={0}
								sx={{
									width: 'auto',
									padding: '1.875rem',
									borderRadius: '1.25rem',
									backgroundColor: '#F8F9FB',
									height: 'auto',
									border: '1px solid rgba(135, 148, 194, 0.20)',
								}}
							>
								<Typography
									sx={{
										fontFamily: 'Poppins, sans-serif',
										fontSize: '1.125rem',
										color: '#1B1B1B',
										fontWeight: 600,
										mb: 3,
									}}
								>
									Product Details
								</Typography>
								<Grid container spacing={3}>
									<Grid item xs={3}>
										<Typography
											sx={{
												color: '#1B1B1B',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 500,
											}}
										>
											{prospectDetails?.product_name}
										</Typography>
										<Typography
											sx={{
												color: '#8794C2',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.75rem',
												fontWeight: 400,
											}}
										>
											Product Name
										</Typography>
									</Grid>
									<Grid item xs={3}>
										<Typography
											sx={{
												color: '#1B1B1B',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 500,
											}}
										>
											{new Date(
												prospectDetails?.loan_disbursement_date,
											).toLocaleDateString()}
										</Typography>
										<Typography
											sx={{
												color: '#8794C2',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.75rem',
												fontWeight: 400,
											}}
										>
											Disbursement Date
											{/* & Time */}
										</Typography>
									</Grid>
									<Grid item xs={3}>
										<Typography
											sx={{
												color: '#1B1B1B',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 500,
											}}
										>
											{
												prospectDetails?.disbursement_loan_amount
											}
										</Typography>
										<Typography
											sx={{
												color: '#8794C2',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.75rem',
												fontWeight: 400,
											}}
										>
											Disbursement Amount
										</Typography>
									</Grid>
									<Grid item xs={3}>
										<Typography
											sx={{
												color: '#1B1B1B',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 500,
											}}
										>
											{prospectDetails?.tenor} Months
										</Typography>
										<Typography
											sx={{
												color: '#8794C2',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.75rem',
												fontWeight: 400,
											}}
										>
											Total Tenure
										</Typography>
									</Grid>
									<Grid item xs={3}>
										<Typography
											sx={{
												color: '#1B1B1B',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 500,
											}}
										>
											{prospectDetails?.balance_tenor} Months
										</Typography>
										<Typography
											sx={{
												color: '#8794C2',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.75rem',
												fontWeight: 400,
											}}
										>
											Balance Tenure
										</Typography>
									</Grid>
									<Grid item xs={3}>
										<Typography
											sx={{
												color: '#1B1B1B',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 500,
											}}
										>
											{prospectDetails?.interest_rate}%
										</Typography>
										<Typography
											sx={{
												color: '#8794C2',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.75rem',
												fontWeight: 400,
											}}
										>
											Interest Rate
										</Typography>
									</Grid>
									<Grid item xs={3}>
										<Typography
											sx={{
												color: '#1B1B1B',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 500,
											}}
										>
											{prospectDetails?.loan_due_date}
										</Typography>
										<Typography
											sx={{
												color: '#8794C2',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.75rem',
												fontWeight: 400,
											}}
										>
											Due Date
										</Typography>
									</Grid>
									<Grid item xs={3}>
										<Typography
											sx={{
												color: '#1B1B1B',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												fontWeight: 500,
											}}
										>
											{prospectDetails?.outstanding_amount}
										</Typography>
										<Typography
											sx={{
												color: '#8794C2',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.75rem',
												fontWeight: 400,
											}}
										>
											Overdue Amount
										</Typography>
									</Grid>
								</Grid>
							</Card>
						</Grid>
					</Grid>
					<br />
					<Card
						elevation={0}
						sx={{
							width: 'auto',
							padding: '1.875rem',
							borderRadius: '1.25rem',
							backgroundColor: '#F8F9FB',
							height: 'auto',
							border: '1px solid rgba(135, 148, 194, 0.20)',
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Poppins, sans-serif',
								fontSize: '1.125rem',
								color: '#1B1B1B',
								fontWeight: 600,
								mb: 3,
							}}
						>
							Family Members
						</Typography>
						<TableContainer>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												S.No
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												Name
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												DOB
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												Age
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												Gender
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												Relation
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												Annual Income
											</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												1
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												{prospectDetails?.family_name}
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												{prospectDetails?.family_dob}
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												{prospectDetails?.family_age}
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												{prospectDetails?.family_gender}
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												{prospectDetails?.family_relation}
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												{
													prospectDetails?.family_annual_income
												}
											</Typography>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Card>
					<br />
					<Card
						elevation={0}
						sx={{
							width: 'auto',
							padding: '1.875rem',
							borderRadius: '1.25rem',
							backgroundColor: '#F8F9FB',
							height: 'auto',
							border: '1px solid rgba(135, 148, 194, 0.20)',
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Poppins, sans-serif',
								fontSize: '1.125rem',
								color: '#1B1B1B',
								fontWeight: 600,
								mb: 3,
							}}
						>
							Repayments
						</Typography>
						<TableContainer>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												S.No
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												Month
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												EMI Amount
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												Amount Overdue
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												Transaction Date
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.6875rem',
													fontWeight: 400,
													color: '#8794C2',
												}}
											>
												Status
											</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												1
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												{prospectDetails?.repayment_month}
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												₹{' '}
												{
													prospectDetails?.repayment_EMI_amount
												}
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												₹{' '}
												{
													prospectDetails?.repayment_amount_overdue
												}
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Typography
												sx={{
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
													color: '#1B1B1B',
												}}
											>
												{
													prospectDetails?.repayment_transaction_date
												}
											</Typography>
										</TableCell>
										<TableCell
											sx={{
												display: 'flex',
												flexDirection: 'row',
											}}
											align="left"
										>
											<Paper
												align="center"
												elevation={0}
												sx={{
													mt: 0,
													background:
														'linear-gradient(to bottom, #00B85E, #00B85E00)',
													borderRadius: '1.875rem',
													height: '2.5rem',
													width: '13rem',
													opacity: '0.1',
												}}
											/>
											<Typography
												sx={{
													color: '#00B85E',
													pt: 1,
													position: 'relative',
													left: '-172px',
													minWidth: '150px',
													fontFamily:
														'Poppins, sans-serif',
													fontSize: '0.875rem',
													fontWeight: 500,
												}}
											>
												{prospectDetails?.repayment_status}
											</Typography>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Card>
				</div>
			</div>
		</>
	);
};
