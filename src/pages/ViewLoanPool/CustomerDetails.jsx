import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Pagination } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CustomerDetailsIcon from '../../assets/svg/CustomerDetailsIcon';
import { Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StatisticsWhiteIcon from '@/assets/svg/StatisticsWhiteIcon';

function createData(
	name,
	principalOutstanding,
	balanceTenure,
	state,
	district,
	irepBranch,
	documentation,
) {
	return {
		name,
		principalOutstanding,
		balanceTenure,
		state,
		district,
		irepBranch,
		documentation,
	};
}

const rows = [
	createData(
		'Abishek T',
		'₹ 36,000/-',
		'22 Months',
		'Tamil Nadu',
		'Chennai',
		'Broadway',
		'8/8',
	),
	createData(
		'Esaineshhvara K',
		'₹ 36,000/-',
		'22 Months',
		'Tamil Nadu',
		'Chennai',
		'Broadway',
		'8/8',
	),
	createData(
		'Hareesh Kumaar S',
		'₹ 36,000/-',
		'22 Months',
		'Tamil Nadu',
		'Chennai',
		'Broadway',
		'8/8',
	),
	createData(
		'Jaswant Kanna V',
		'₹ 36,000/-',
		'22 Months',
		'Tamil Nadu',
		'Chennai',
		'Broadway',
		'8/8',
	),
	createData(
		'Kishore Kumar S K',
		'₹ 36,000/-',
		'22 Months',
		'Tamil Nadu',
		'Chennai',
		'Broadway',
		'8/8',
	),
	createData(
		'Manish Easwar A',
		'₹ 36,000/-',
		'22 Months',
		'Tamil Nadu',
		'Chennai',
		'Broadway',
		'8/8',
	),
	createData(
		'Praveenkumar M',
		'₹ 36,000/-',
		'22 Months',
		'Tamil Nadu',
		'Chennai',
		'Broadway',
		'8/8',
	),
	createData(
		'Sanjith G',
		'₹ 36,000/-',
		'22 Months',
		'Tamil Nadu',
		'Chennai',
		'Broadway',
		'8/8',
	),
	createData(
		'Abishek Thirumoorthi',
		'₹ 36,000/-',
		'22 Months',
		'Tamil Nadu',
		'Chennai',
		'Broadway',
		'8/8',
	),
	createData(
		'Varun Nivas V M',
		'₹ 36,000/-',
		'22 Months',
		'Tamil Nadu',
		'Chennai',
		'Broadway',
		'8/8',
	),
	createData(
		'Veera Pandi',
		'₹ 36,000/-',
		'22 Months',
		'Tamil Nadu',
		'Chennai',
		'Broadway',
		'8/8',
	),
];

export const LoanPoolCustomerDetails = () => {
	return (
		<div align="center" style={{ backgroundColor: '#F8F9FB', height: '100vh' }}>
			<br />
			<br />
			<Grid sx={{ width: 1100 }} container spacing={0}>
				<Grid item xs={5} align="left">
					<TextField
						sx={{ backgroundColor: '#FFFFFF', width: '26.0625rem' }}
						label="Search Customer Name"
						InputProps={{
							endAdornment: (
								<InputAdornment position="start">
									<SearchOutlinedIcon />
								</InputAdornment>
							),
						}}
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={2}></Grid>
				<Grid item xs={2} align="right">
					<Button color="error" variant="contained" sx={{ mt: 1.5 }}>
						<Typography
							sx={{
								mr: 1,
								fontSize: '0.75rem',
								fontFamily: 'Poppins, sans-serif',
							}}
						>
							View Statistics
						</Typography>{' '}
						<StatisticsWhiteIcon />
					</Button>
				</Grid>
				<Grid item xs={3} align="center">
					<Pagination
						sx={{ mt: 1.5 }}
						count={11}
						defaultPage={6}
						siblingCount={0}
					/>
				</Grid>
			</Grid>
			<br />
			<br />
			<TableContainer>
				<Table sx={{ width: 1100 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.6875rem',
									}}
								>
									S.No
								</Typography>
							</TableCell>
							<TableCell align="left">
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.6875rem',
									}}
								>
									Customer Name
								</Typography>
							</TableCell>
							<TableCell align="left">
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.6875rem',
									}}
								>
									Principal Outstanding
								</Typography>
							</TableCell>
							<TableCell align="left">
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.6875rem',
									}}
								>
									Balance Tenure
								</Typography>
							</TableCell>
							<TableCell align="left">
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.6875rem',
									}}
								>
									State
								</Typography>
							</TableCell>
							<TableCell align="left">
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.6875rem',
									}}
								>
									District
								</Typography>
							</TableCell>
							<TableCell align="left">
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.6875rem',
									}}
								>
									IREP Branch Name
								</Typography>
							</TableCell>
							<TableCell align="left">
								<Typography
									sx={{
										color: '#8794C2',
										fontFamily: 'Poppins, sans-serif',
										fontSize: '0.6875rem',
									}}
								>
									Documentation
								</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => (
							<TableRow
								key={row.name}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell>
									<Typography
										sx={{
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
										}}
									>
										{index + 1}
									</Typography>
								</TableCell>
								<TableCell align="left">
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'center',
										}}
									>
										<CustomerDetailsIcon />
										<Typography
											sx={{
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												marginLeft: '1rem',
											}}
										>
											{row.name}
										</Typography>
									</div>
								</TableCell>
								<TableCell align="left">
									<Typography
										sx={{
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
										}}
									>
										{row.principalOutstanding}
									</Typography>
								</TableCell>
								<TableCell align="left">
									<Typography
										sx={{
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
										}}
									>
										{row.balanceTenure}
									</Typography>
								</TableCell>
								<TableCell align="left">
									<Typography
										sx={{
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
										}}
									>
										{row.state}
									</Typography>
								</TableCell>
								<TableCell align="left">
									<Typography
										sx={{
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
										}}
									>
										{row.district}
									</Typography>
								</TableCell>
								<TableCell align="left">
									<Typography
										sx={{
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
										}}
									>
										{row.irepBranch}
									</Typography>
								</TableCell>
								<TableCell align="left">
									<Typography
										sx={{
											fontFamily: 'Poppins, sans-serif',
											fontSize: '0.875rem',
										}}
									>
										{row.documentation}
									</Typography>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
