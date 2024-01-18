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
export const BankProspectDetails = () => {
	return (
		<>
			<HeaderComp title={'Manish Easwar'} breadCrumbs={breadCrumbs} />
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
											Manish Easwar A
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
												139700305
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
												18277700047693
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
							height: '9rem',
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
							height: '9rem',
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
									26/10/1980
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
									ATFE34M53
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
									43 years
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
									12th
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
									Female
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
									Married
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
									Swamy Nayaka
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
									Manjula
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
									Siddu
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
									Self-Employed
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
									₹ 2 LPA
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
									height: '18rem',
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
									8495859885
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
									326.Ragigudda slum J P Nagar, 2nd phase Bangalore
									South .Bangalore Bangalore. Karnataka. 560078
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
									326.Ragigudda slum J P Nagar, 2nd phase Bangalore
									South .Bangalore Bangalore. Karnataka. 560078
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
									height: '18rem',
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
											JLG
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
											04-08-2022 14:39:25
										</Typography>
										<Typography
											sx={{
												color: '#8794C2',
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.75rem',
												fontWeight: 400,
											}}
										>
											Disbursement Date & Time
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
											₹ 39158
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
											24 Months
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
											15 Months
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
											26%
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
											01-02-2023
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
											Full payment done
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
												Manish Easwar
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
												01-01-1979
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
												44
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
												Male
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
												Spouse
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
												₹ 2 LPA
											</Typography>
										</TableCell>
									</TableRow>
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
												2
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
												Esaineshhvara
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
												01-01-1979
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
												44
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
												Male
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
												Spouse
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
												₹ 2 LPA
											</Typography>
										</TableCell>
									</TableRow>
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
												3
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
												Anantha Krishnan
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
												01-01-1979
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
												44
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
												Male
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
												Spouse
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
												₹ 2 LPA
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
												Dec 2022
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
												₹ 2155
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
												₹ 0
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
												10 January 2023
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
												Full Payment Done
											</Typography>
										</TableCell>
									</TableRow>

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
												2
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
												Dec 2022
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
												₹ 2155
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
												₹ 0
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
												10 January 2023
											</Typography>
										</TableCell>
										{/* <TableCell sx={{ display:'flex', flexDirection:'row'}}align="left">
                                        <Paper align="center" elevation={0} sx={{mt:0, background: 'linear-gradient(to bottom, #F78736, #F7873600)', borderRadius:"1.875rem", height: "2.5rem", width:"13rem", opacity: "0.1"}} />
                                        <Typography sx={{color:"#F78736", pt:1 ,position:'relative', left:'-182px', minWidth:'150px', fontFamily: "Poppins, sans-serif", fontSize: "0.875rem", fontWeight: 500 }}>
                                            Partial Payment Done
                                        </Typography>
                                    </TableCell> */}
									</TableRow>

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
												3
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
												Dec 2022
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
												₹ 2155
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
												₹ 0
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
												10 January 2023
											</Typography>
										</TableCell>
										{/* <TableCell sx={{ display:'flex', flexDirection:'row'}}align="left">
                                        <Paper align="center" elevation={0} sx={{mt:0, background: 'linear-gradient(to bottom, #C4161C, #C4161C00)', borderRadius:"1.875rem", height: "2.5rem", width:"15rem", opacity: "0.1"}} />
                                        <Typography sx={{color:"#C4161C", pt:1 ,position:'relative', left:'-182px', minWidth:'150px', fontFamily: "Poppins, sans-serif", fontSize: "0.875rem", fontWeight: 500 }}>
                                            Reschedule - 20 Feb 2024
                                        </Typography>
                                    </TableCell> */}
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
