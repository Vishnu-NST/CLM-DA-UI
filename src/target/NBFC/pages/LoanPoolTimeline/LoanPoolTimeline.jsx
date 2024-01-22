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
import Stepper from './DDStepper';
import HeaderComp from '@/components/HeaderComponent';
import { useNavigate } from 'react-router-dom';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

import useLoanTimePool from './../../../../store/useLoanTimePool';

function LoanPoolTimeline() {
	const loanPoolData = useLoanTimePool();
	const data = loanPoolData.data ? loanPoolData.data : [];

	const [poolName, setPoolName] = useState('');
	const [selectPool, setSelectPool] = useState('');
	const [filteredData, setFilteredData] = useState(data);
	const [currentPage, setCurrentPage] = useState(1);
	const [date, setDate] = useState('');
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
	// const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = { day: 'numeric', month: 'long' };
		return date.toLocaleDateString('en-US', options);
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
			{/* {
        "pool_id": "POOL-173",
        "name": "SVASTI-JLG-January 22",
        "createdon": "2024-01-22T07:54:28.868557",
        "aum": "50000000.00",
        "credit_ratings": "A+",
        "irr": "50.00",
        "days_left_until_closure": 0,
        "push_to_bank": null,
        "due_diligence_status": null,
        "pool_status": null,
        "transaction_status": null
    } */}
			{data.map((item, index) => (
				<React.Fragment key={index}>
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
								Added on {formatDate(item.createdon)}
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
								style={{ fontSize: '0.875rem', color: '#00B85E' }}
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
										item.daysLeft,
									),
									color: getFontColor(item.daysLeft),
								}}
							>
								{item.days_left_until_closure} days left
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
						<Stepper
							push_to_bank={item.push_to_bank}
							due_diligence_status={item.due_diligence_status}
							pool_status={item.pool_status}
							transaction_status={item.transaction_status}
						></Stepper>
					</Box>
				</React.Fragment>
			))}
		</>
	);
}

export default LoanPoolTimeline;
