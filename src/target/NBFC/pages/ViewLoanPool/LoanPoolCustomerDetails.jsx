import StatisticsWhiteIcon from '@/assets/svg/StatisticsWhiteIcon';
import HeaderComp from '@/components/HeaderComponent';
import useGetViewLoanPoolCustomerDetails from '@/store/useGetLoanPoolCustomerDetails';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Button, Pagination, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import CustomerDetailsIcon from '../../../../assets/svg/CustomerDetailsIcon';

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
		path: null,
	},
];

export const LoanPoolCustomerDetails = () => {
	const navigate = useNavigate();

	const data = useGetViewLoanPoolCustomerDetails();

	return (
		<>
			<HeaderComp title={data?.data[0]?.pool_id} breadCrumbs={breadCrumbs} />
			<div style={{ backgroundColor: '#F8F9FB' }}>
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
							{data?.data?.map((row, index) => (
								<TableRow
									key={row?.name}
									sx={{
										cursor: 'pointer',
										'&:last-child td, &:last-child th': {
											border: 0,
										},
									}}
									onClick={() =>
										navigate(
											`/nbfc/panel/prospect-details/${row?.customer_id}/${row?.pool_id}`,
										)
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
												{row?.name}
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
											{row?.outstanding_amount}
										</Typography>
									</TableCell>
									<TableCell align="left">
										<Typography
											sx={{
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
											}}
										>
											{row?.tenor}
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
											{row?.district_name}
										</Typography>
									</TableCell>
									<TableCell align="left">
										<Typography
											sx={{
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
											}}
										>
											{row?.branch_name}
										</Typography>
									</TableCell>
									<TableCell align="left">
										<Typography
											sx={{
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
												color: '#00B85E',
											}}
										>
											8/8
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
