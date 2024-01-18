import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchIcon from '../../../../assets/svg/SearchIcon';
import InputComponent from '@/components/InputComponent';
import SelectComponent from '@/components/SelectComponent';
import CustomButton from '@/components/CustomButton';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Typography from '@mui/material/Typography';
import './LoanPool.scss';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import BDDStepper from '../../../Bank/pages/BankDueDiligence/BDDStepper';
import HeaderComp from '@/components/HeaderComponent';
import { useNavigate } from 'react-router-dom';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
const data = [
	{
		bankName: 'Bank A',
		amount: '10 cr',
		creditRating: 'A+',
		averageIRR: '10%',
		daysLeft: 15,
		status: 'completed',
	},
	{
		bankName: 'Bank B',
		amount: '20 cr',
		creditRating: 'B',
		averageIRR: '15%',
		daysLeft: 25,
		status: 'approved',
	},
	{
		bankName: 'Bank C',
		amount: '30 cr',
		creditRating: 'C',
		averageIRR: '12%',
		daysLeft: 3,
		status: 'rejected',
	},
	{
		bankName: 'Bank D',
		amount: '25 cr',
		creditRating: 'A',
		averageIRR: '18%',
		daysLeft: 20,
		status: 'processing',
	},
	{
		bankName: 'Bank E',
		amount: '15 cr',
		creditRating: 'B+',
		averageIRR: '22%',
		daysLeft: 30,
		status: 'completed',
	},
	{
		bankName: 'Bank F',
		amount: '12 cr',
		creditRating: 'A-',
		averageIRR: '14%',
		daysLeft: 22,
		status: 'approved',
	},
	{
		bankName: 'Bank G',
		amount: '18 cr',
		creditRating: 'B-',
		averageIRR: '16%',
		daysLeft: 18,
		status: 'rejected',
	},
	{
		bankName: 'Bank H',
		amount: '28 cr',
		creditRating: 'A+',
		averageIRR: '20%',
		daysLeft: 12,
		status: 'processing',
	},
	{
		bankName: 'Bank I',
		amount: '22 cr',
		creditRating: 'C+',
		averageIRR: '25%',
		daysLeft: 28,
		status: 'completed',
	},
	{
		bankName: 'Bank J',
		amount: '8 cr',
		creditRating: 'A',
		averageIRR: '14%',
		daysLeft: 24,
		status: 'approved',
	},
	{
		bankName: 'Bank K',
		amount: '16 cr',
		creditRating: 'B',
		averageIRR: '19%',
		daysLeft: 14,
		status: 'rejected',
	},
	{
		bankName: 'Bank L',
		amount: '24 cr',
		creditRating: 'A+',
		averageIRR: '21%',
		daysLeft: 16,
		status: 'processing',
	},
	{
		bankName: 'Bank M',
		amount: '14 cr',
		creditRating: 'B+',
		averageIRR: '17%',
		daysLeft: 26,
		status: 'completed',
	},
	{
		bankName: 'Bank N',
		amount: '11 cr',
		creditRating: 'C-',
		averageIRR: '13%',
		daysLeft: 21,
		status: 'approved',
	},
	{
		bankName: 'Bank O',
		amount: '19 cr',
		creditRating: 'A-',
		averageIRR: '23%',
		daysLeft: 19,
		status: 'rejected',
	},
	{
		bankName: 'Bank P',
		amount: '29 cr',
		creditRating: 'B-',
		averageIRR: '18%',
		daysLeft: 11,
		status: 'processing',
	},
	{
		bankName: 'Bank Q',
		amount: '23 cr',
		creditRating: 'A+',
		averageIRR: '24%',
		daysLeft: 27,
		status: 'completed',
	},
	{
		bankName: 'Bank R',
		amount: '9 cr',
		creditRating: 'C+',
		averageIRR: '16%',
		daysLeft: 23,
		status: 'approved',
	},
	{
		bankName: 'Bank S',
		amount: '17 cr',
		creditRating: 'A',
		averageIRR: '22%',
		daysLeft: 17,
		status: 'rejected',
	},
	{
		bankName: 'Bank T',
		amount: '27 cr',
		creditRating: 'B+',
		averageIRR: '19%',
		daysLeft: 13,
		status: 'processing',
	},
];

function LoanPoolTimeline() {
	const [poolName, setPoolName] = useState('');
	const [selectPool, setSelectPool] = useState('');
	const [filteredData, setFilteredData] = useState(data);
	const [currentPage, setCurrentPage] = useState(1);

	//CSS

	const arrowBtnStyle = {
		border: '1px solid rgba(112, 126, 174, 0.5)',
		borderRadius: '7px',
		padding: '0.3rem 0.2rem',
		width: 'fit-content',
		minWidth: 'fit-content',
		color: '#C4161C',
	};
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

	//commom

	const searchPool = {
		id: 'PoolName',
		name: 'PoolName',
		placeholder: 'Search Pool Name',
		type: 'text',
		value: poolName,
		onChange: (event) => {
			const searchTerm = event.target.value;
			setPoolName(searchTerm);
			const newData = data.filter((item) =>
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

	const poolSelect = {
		id: 'selectPool',
		name: 'selectPool',
		displayEmpty: true,
		multiple: false,
		placeholder: 'All Pool',
		type: 'text',
		value: selectPool,
		onChange: (event) => {
			setSelectPool(event.target.value);
		},
		disabled: false,
		options: [
			{
				label: 'Purchased Pool',
				value: 'purchased',
			},
			{
				label: 'Received Pool',
				value: 'received',
			},
		],
	};

	//variables
	const itemsPerPage = 10;
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageChange = (direction) => {
		if (direction === 'next' && indexOfLastItem < data.length) {
			setCurrentPage(currentPage + 1);
		} else if (direction === 'prev' && currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const navigate = useNavigate();

	const handleCustomerDetailsClick = () => {
		navigate('/bank/panel/customerdetails');
	};

	return (
		<>
			<HeaderComp title={'Loan Pool Timeline'} />
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				padding="16px"
			>
				<div style={{ width: '18rem', marginRight: '8px' }}>
					<InputComponent {...searchPool} />
				</div>

				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					padding="16px"
				>
					<div style={{ width: '10rem', marginRight: '8px' }}>
						<SelectComponent {...poolSelect} />
					</div>

					<div style={{ paddingBottom: '28px' }} className="flex">
						<div className="pagination-txt">{`${
							indexOfFirstItem + 1
						}-${indexOfLastItem} of ${data.length}`}</div>
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

			{currentItems.map((item, index) => (
				<React.Fragment key={index}>
					<Box className="bankDD-search">
						<Box className="flex flexDirectionColunm">
							<Typography
								variant="body1"
								style={{ fontSize: '0.875rem' }}
							>
								{item.bankName}
							</Typography>
							<Typography
								variant="body2"
								style={{ fontSize: '0.6875rem' }}
							>
								Added on 15th April
							</Typography>
						</Box>
						<Box display="flex" flexDirection="column">
							<Typography style={{ fontSize: '0.875rem' }}>
								{item.amount}
							</Typography>
							<Typography style={{ fontSize: '0.6875rem' }}>
								AUM
							</Typography>
						</Box>
						<Box display="flex" flexDirection="column">
							<Typography
								style={{ fontSize: '0.875rem', color: '#00B85E' }}
							>
								{item.creditRating}
							</Typography>
							<Typography style={{ fontSize: '0.6875rem' }}>
								Credit Ratings
							</Typography>
						</Box>
						<Box display="flex" flexDirection="column">
							<Typography style={{ fontSize: '0.875rem' }}>
								{item.averageIRR}
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
										item.daysLeft,
									),
									color: getFontColor(item.daysLeft),
								}}
							>
								{item.daysLeft} days left
							</Typography>
						</Box>
						<Box onClick={handleCustomerDetailsClick}>
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
						<Box>
							<SignalCellularAltIcon sx={{ color: '#00B85E' }} />
						</Box>
					</Box>
					<Box sx={{ marginTop: '1rem' }}>
						<BDDStepper status={item.status}></BDDStepper>
					</Box>
				</React.Fragment>
			))}
		</>
	);
}

export default LoanPoolTimeline;
