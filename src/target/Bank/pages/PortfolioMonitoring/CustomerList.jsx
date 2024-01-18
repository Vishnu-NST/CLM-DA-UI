import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
	Box,
	Grid,
	InputAdornment,
	Pagination,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from '@mui/material';
import CustomerDetailsIcon from '@/assets/svg/CustomerDetailsIcon';
import SummaryAccordion from './components/SummaryAccordion';
import HeaderComp from '@/components/HeaderComponent';

export default function CustomerList() {
	function createData(
		customerName,
		collectionTarget,
		collectionStatus,
		dpdStatus,
		odAmount,
	) {
		return {
			customerName,
			collectionTarget,
			collectionStatus,
			dpdStatus,
			odAmount,
		};
	}

	const rows = [
		createData('Abishek T', '₹ 36,000/-', '₹ 36,000/-', '25 days', '₹ 36,000/-'),
		createData(
			'Esaineshhvara K',
			'₹ 36,000/-',
			'₹ 36,000/-',
			'25 days',
			'₹ 36,000/-',
		),
		createData(
			'Hareesh Kumaar S',
			'₹ 36,000/-',
			'₹ 36,000/-',
			'25 days',
			'₹ 36,000/-',
		),
		createData(
			'Jaswant Kanna V',
			'₹ 36,000/-',
			'₹ 36,000/-',
			'25 days',
			'₹ 36,000/-',
		),
		createData(
			'Kishore Kumar S K',
			'₹ 36,000/-',
			'₹ 36,000/-',
			'25 days',
			'₹ 36,000/-',
		),
		createData(
			'Manish Easwar A',
			'₹ 36,000/-',
			'₹ 36,000/-',
			'25 days',
			'₹ 36,000/-',
		),
		createData(
			'Praveenkumar M',
			'₹ 36,000/-',
			'₹ 36,000/-',
			'25 days',
			'₹ 36,000/-',
		),
		createData('Sanjith G', '₹ 36,000/-', '₹ 36,000/-', '25 days', '₹ 36,000/-'),
	];

	return (
		<>
            <HeaderComp title={'Customer List'} />
			<Box align="center" sx={{ backgroundColor: '#F8F9FB', height: '100%' }}>
				<Grid container spacing={0.5} sx={{ mt: 1.5 }}>
					<Grid item xs={6} align="left" sx={{ ml: 2 }}>
						<TextField
							sx={{ backgroundColor: '#FFFFFF', width: '26.0625rem' }}
							label="Search Pool Name"
							color="error"
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
					<Grid item xs={2.5}></Grid>
					<Grid item xs={3} align="right">
						<Pagination
							sx={{ mt: 1.5 }}
							count={11}
							defaultPage={1}
							siblingCount={0}
						/>
					</Grid>
				</Grid>
				<br />
				<SummaryAccordion />
				<br />
				<TableContainer>
					<Table sx={{ width: 1220 }} aria-label="simple table">
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
										Collection Target
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
										Collection Status
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
										DPD Status
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
										Overdue Amount
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
											<div
												style={{
													display: 'flex',
													flexDirection: 'column',
												}}
											>
												<Typography
													sx={{
														fontFamily:
															'Poppins, sans-serif',
														fontSize: '0.875rem',
														marginLeft: '1rem',
													}}
												>
													{row.customerName}
												</Typography>
												<Typography
													sx={{
														ml: 2,
														fontFamily:
															'Poppins, sans-serif',
														fontSize: '0.875rem',
														fontWeight: 600,
														color: '#C4161C',
													}}
												>
													<u>View Details</u>
												</Typography>
											</div>
										</div>
									</TableCell>
									<TableCell align="left">
										<Typography
											sx={{
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
											}}
										>
											{row.collectionTarget}
										</Typography>
									</TableCell>
									<TableCell align="left">
										<Typography
											sx={{
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
											}}
										>
											{row.collectionStatus}
										</Typography>
									</TableCell>
									<TableCell align="left">
										<Typography
											sx={{
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
											}}
										>
											{row.dpdStatus}
										</Typography>
									</TableCell>
									<TableCell align="left">
										<Typography
											sx={{
												fontFamily: 'Poppins, sans-serif',
												fontSize: '0.875rem',
											}}
										>
											{row.odAmount}
										</Typography>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</>
	);
}
