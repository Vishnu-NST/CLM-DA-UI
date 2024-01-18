/* eslint-disable no-unused-vars */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Pagination } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CustomerDetailsIcon from '../../../../assets/svg/CustomerDetailsIcon';
import { Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StatisticsWhiteIcon from '@/assets/svg/StatisticsWhiteIcon';
import HeaderComp from '@/components/HeaderComponent';
import { useNavigate } from 'react-router-dom';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

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

const breadCrumbs = [
	{
		data: 'Select Product',
		path: null,
	},
	{
		data: 'JLG',
		path: null,
	},
	{
		data: 'MUTH-JLG',
		path: null,
	},
	{
		data: 'Customer details',
		path: null,
	},
];

export const BankPoolCustomerDetails = () => {
	const navigate = useNavigate();

	return (
		<>
			<HeaderComp title={'IREP-MF April 23-1'} breadCrumbs={breadCrumbs} />
			<div style={{ backgroundColor: '#F8F9FB' }}>
				<br />
				<br />
				<Grid sx={{ width: 1100 }} container spacing={0}>
					<Grid item sm={3.5} align="left">
						<TextField
							sx={{ backgroundColor: '#FFFFFF', width: 'auto' }}
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
					<Grid
						item
						sm={2}
						sx={{
							width: 'fit-content',
						}}
					>
						<div className="filter-box" onClick={() => {}}>
							<div>Filters</div>
							&nbsp; &nbsp;
							<FilterListOutlinedIcon
								style={{
									fontSize: '1.15rem',
								}}
							/>
						</div>
					</Grid>
					{/* <Grid item xs={2} align="right">
						<Button
							color="error"
							variant="contained"
							sx={{ mt: 1.5 }}
							onClick={() =>
								navigate('/nbfc/panel/customer-statistics')
							}
						>
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
					</Grid> */}
					<Grid
						item
						sm={6.5}
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
						}}
					>
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
										cursor: 'pointer',
										'&:last-child td, &:last-child th': {
											border: 0,
										},
									}}
									onClick={() =>
										navigate('/bank/panel/prospect-details')
									}
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
													fontFamily:
														'Poppins, sans-serif',
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
		</>
	);
};
