import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CustomerDetailsIcon from '../../../../assets/svg/CustomerDetailsIcon';
import { Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import SearchIcon from '../../../../assets/svg/SearchIcon';
import InputComponent from '@/components/InputComponent';
import SelectComponent from '@/components/SelectComponent';
import CustomButton from '@/components/CustomButton';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Box } from '@mui/material';
import './BankDueDiligence.scss';
import FilterListIcon from '@mui/icons-material/FilterList';
import HeaderComp from '@/components/HeaderComponent';
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

const CustomerDetails = () => {
	const [poolName, setPoolName] = useState('');
	const [filteredData, setFilteredData] = useState(rows);
	const [currentPage, setCurrentPage] = useState(1);

	const searchPool = {
		id: 'PoolName',
		name: 'PoolName',
		placeholder: 'Search Pool Name',
		type: 'text',
		value: poolName,
		onChange: (event) => {
			const searchTerm = event.target.value;
			setPoolName(searchTerm);
			const newData = rows.filter((item) =>
				item.bankName.toLowerCase().includes(searchTerm.toLowerCase()),
			);

			setFilteredData(newData);
		},
		onKeyDown: (evt) => {
			(evt.key === '+' ||
				evt.key === '-' ||
				evt.key === '.' ||
				evt.key === 'e' ||
				evt.key === 'ArrowUp' ||
				evt.key === 'ArrowDown') &&
				evt.preventDefault();
		},
		disabled: false,
		endIcon: <SearchIcon />,
	};

	const arrowBtnStyle = {
		border: '1px solid rgba(112, 126, 174, 0.5)',
		borderRadius: '7px',
		padding: '0.3rem 0.2rem',
		width: 'fit-content',
		minWidth: 'fit-content',
		color: '#C4161C',
	};

	//variables
	const itemsPerPage = 10;
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageChange = (direction) => {
		if (direction === 'next' && indexOfLastItem < rows.length) {
			setCurrentPage(currentPage + 1);
		} else if (direction === 'prev' && currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const navigate = useNavigate();

	const handleDocunment = () => {
		navigate('/bank/panel/ProspectDetails');
	};
	return (
		<>
			<Box align="center" style={{ backgroundColor: '#F8F9FB' }}>
				<HeaderComp title={'Due Diligence'} />

				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					padding="16px"
				>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box style={{ width: '18rem', marginRight: '48px' }}>
							<InputComponent {...searchPool} />
						</Box>

						<Box>
							<div
								style={{
									color: '#C4161C',
									fontSize: '0.95rem',
									padding: '3px 22px',
									backgroundColor: '#ffffff',
									borderRadius: '15px',
									display: 'flex',
								}}
							>
								<div style={{ margin: '4px 10px' }}>Filter</div>
								<div>
									<FilterListIcon />
								</div>
							</div>
						</Box>
					</Box>

					<Box
						display="flex"
						alignItems="center"
						justifyContent="space-between"
						padding="16px"
					>
						<div style={{ paddingBottom: '28px' }} className="flex">
							<div className="pagination-txt">{`${
								indexOfFirstItem + 1
							}-${indexOfLastItem} of ${rows.length}`}</div>
							&nbsp;
							<div className="flex">
								<CustomButton
									customStyle={arrowBtnStyle}
									onClick={() => handlePageChange('prev')}
								>
									<KeyboardArrowLeftOutlinedIcon />
								</CustomButton>
								&nbsp;
								<CustomButton
									customStyle={arrowBtnStyle}
									onClick={() => handlePageChange('next')}
								>
									<KeyboardArrowRightOutlinedIcon />
								</CustomButton>
							</div>
						</div>
					</Box>
				</Box>

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
							{currentItems.map((row, index) => (
								<TableRow
									style={{ cursor: 'pointer' }}
									onClick={handleDocunment}
									key={row.name}
									sx={{
										'&:last-child td, &:last-child th': {
											border: 0,
											cursor: 'pointer',
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
			</Box>
		</>
	);
};
export default CustomerDetails;
