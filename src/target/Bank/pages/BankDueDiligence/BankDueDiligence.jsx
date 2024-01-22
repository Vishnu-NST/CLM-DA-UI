import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchIcon from '../../../../assets/svg/SearchIcon';
import InputComponent from '@/components/InputComponent';
import SelectComponent from '@/components/SelectComponent';
import CustomButton from '@/components/CustomButton';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Typography from '@mui/material/Typography';
import './BankDueDiligence.scss';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import BDDStepper from './BDDStepper';
import HeaderComp from '@/components/HeaderComponent';
import { useNavigate } from 'react-router-dom';
import useDD from '@/store/useDD';
const data = [
	{
		pool_id: 'POOL-47',
		name: 'Natonal Insurance',
		createdOn: '2024-01-19T07:35:28.386251',
		nbfc_logo: 'N/A',
		aum: '50cr',
		credit_ratings: '1cb6ecf1-6b67-45b9-85f9-4d46ce2327f5',
		irr: '30%',
		days_left_until_closure: 693,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool completed',
		transaction_status: 'Transaction completed',
		handover_status: 'completed',
	},
	{
		pool_id: 'POOL-48',
		name: 'ABC Corporation',
		createdOn: '2024-01-20T08:45:12.123456',
		nbfc_logo: 'XYZ',
		aum: '75cr',
		credit_ratings: '2ab8edc3-8a12-56c7-93f4-7e85ab36d8c2',
		irr: '25%',
		days_left_until_closure: 500,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool completed',
		transaction_status: 'Transaction completed',
		handover_status: 'pending',
	},
	{
		pool_id: 'POOL-49',
		name: 'Global Investments',
		createdOn: '2024-02-01T10:20:15.987654',
		nbfc_logo: 'GlobInv',
		aum: '120cr',
		credit_ratings: '3cf2a7b1-3e45-98a2-12d5-56e87c9b01ef',
		irr: '18%',
		days_left_until_closure: 800,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool completed',
		transaction_status: 'Transaction pending',
		handover_status: null,
	},
	{
		pool_id: 'POOL-50',
		name: 'Tech Finance Ltd.',
		createdOn: '2024-02-05T12:30:45.543210',
		nbfc_logo: 'TechFin',
		aum: '90cr',
		credit_ratings: '4d987bc1-12f3-45a8-89c2-67e34d21b6ca',
		irr: '22%',
		days_left_until_closure: 600,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool pending',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-51',
		name: 'Investment Ventures',
		createdOn: '2024-02-10T14:55:30.876543',
		nbfc_logo: 'InvVent',
		aum: '80cr',
		credit_ratings: '5a4567b2-89c1-23d4-56e7-89a01234b5cd',
		irr: '28%',
		days_left_until_closure: 450,
		due_diligence_status: 'Due Diligence completed',
		pool_status: '',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-52',
		name: 'Finance Innovators',
		createdOn: '2024-02-15T16:10:20.345678',
		nbfc_logo: 'FinInnov',
		aum: '65cr',
		credit_ratings: '6b3456c3-45d8-12a7-67e9-01d23456c7b8',
		irr: '24%',
		days_left_until_closure: 550,
		due_diligence_status: 'Due Diligence rejected',
		pool_status: '',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-52',
		name: 'Finance Innovators',
		createdOn: '2024-02-15T16:10:20.345678',
		nbfc_logo: 'FinInnov',
		aum: '65cr',
		credit_ratings: '6b3456c3-45d8-12a7-67e9-01d23456c7b8',
		irr: '24%',
		days_left_until_closure: 550,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'pool rejected',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-53',
		name: 'Capital Funders',
		createdOn: '2024-02-20T18:25:40.987654',
		nbfc_logo: 'CapFunds',
		aum: '100cr',
		credit_ratings: '7c6789d4-23a1-56b2-89c3-45d01234e5f6',
		irr: '20%',
		days_left_until_closure: 700,
		due_diligence_status: '',
		pool_status: '',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-47',
		name: 'Natonal Insurance',
		createdOn: '2024-01-19T07:35:28.386251',
		nbfc_logo: 'N/A',
		aum: '50cr',
		credit_ratings: '1cb6ecf1-6b67-45b9-85f9-4d46ce2327f5',
		irr: '30%',
		days_left_until_closure: 693,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool completed',
		transaction_status: 'Transaction completed',
		handover_status: 'completed',
	},
	{
		pool_id: 'POOL-48',
		name: 'ABC Corporation',
		createdOn: '2024-01-20T08:45:12.123456',
		nbfc_logo: 'XYZ',
		aum: '75cr',
		credit_ratings: '2ab8edc3-8a12-56c7-93f4-7e85ab36d8c2',
		irr: '25%',
		days_left_until_closure: 500,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool completed',
		transaction_status: 'Transaction completed',
		handover_status: 'pending',
	},
	{
		pool_id: 'POOL-49',
		name: 'Global Investments',
		createdOn: '2024-02-01T10:20:15.987654',
		nbfc_logo: 'GlobInv',
		aum: '120cr',
		credit_ratings: '3cf2a7b1-3e45-98a2-12d5-56e87c9b01ef',
		irr: '18%',
		days_left_until_closure: 800,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool completed',
		transaction_status: 'Transaction pending',
		handover_status: ' ',
	},
	{
		pool_id: 'POOL-50',
		name: 'Tech Finance Ltd.',
		createdOn: '2024-02-05T12:30:45.543210',
		nbfc_logo: 'TechFin',
		aum: '90cr',
		credit_ratings: '4d987bc1-12f3-45a8-89c2-67e34d21b6ca',
		irr: '22%',
		days_left_until_closure: 600,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool pending',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-51',
		name: 'Investment Ventures',
		createdOn: '2024-02-10T14:55:30.876543',
		nbfc_logo: 'InvVent',
		aum: '80cr',
		credit_ratings: '5a4567b2-89c1-23d4-56e7-89a01234b5cd',
		irr: '28%',
		days_left_until_closure: 450,
		due_diligence_status: 'Due Diligence completed',
		pool_status: '',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-52',
		name: 'Finance Innovators',
		createdOn: '2024-02-15T16:10:20.345678',
		nbfc_logo: 'FinInnov',
		aum: '65cr',
		credit_ratings: '6b3456c3-45d8-12a7-67e9-01d23456c7b8',
		irr: '24%',
		days_left_until_closure: 550,
		due_diligence_status: 'Due Diligence rejected',
		pool_status: '',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-53',
		name: 'Capital Funders',
		createdOn: '2024-02-20T18:25:40.987654',
		nbfc_logo: 'CapFunds',
		aum: '100cr',
		credit_ratings: '7c6789d4-23a1-56b2-89c3-45d01234e5f6',
		irr: '20%',
		days_left_until_closure: 700,
		due_diligence_status: '',
		pool_status: '',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-47',
		name: 'Natonal Insurance',
		createdOn: '2024-01-19T07:35:28.386251',
		nbfc_logo: 'N/A',
		aum: '50cr',
		credit_ratings: '1cb6ecf1-6b67-45b9-85f9-4d46ce2327f5',
		irr: '30%',
		days_left_until_closure: 693,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool completed',
		transaction_status: 'Transaction completed',
		handover_status: 'completed',
	},
	{
		pool_id: 'POOL-48',
		name: 'ABC Corporation',
		createdOn: '2024-01-20T08:45:12.123456',
		nbfc_logo: 'XYZ',
		aum: '75cr',
		credit_ratings: '2ab8edc3-8a12-56c7-93f4-7e85ab36d8c2',
		irr: '25%',
		days_left_until_closure: 500,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool completed',
		transaction_status: 'Transaction completed',
		handover_status: 'pending',
	},
	{
		pool_id: 'POOL-49',
		name: 'Global Investments',
		createdOn: '2024-02-01T10:20:15.987654',
		nbfc_logo: 'GlobInv',
		aum: '120cr',
		credit_ratings: '3cf2a7b1-3e45-98a2-12d5-56e87c9b01ef',
		irr: '18%',
		days_left_until_closure: 800,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool completed',
		transaction_status: 'Transaction pending',
		handover_status: ' ',
	},
	{
		pool_id: 'POOL-50',
		name: 'Tech Finance Ltd.',
		createdOn: '2024-02-05T12:30:45.543210',
		nbfc_logo: 'TechFin',
		aum: '90cr',
		credit_ratings: '4d987bc1-12f3-45a8-89c2-67e34d21b6ca',
		irr: '22%',
		days_left_until_closure: 600,
		due_diligence_status: 'Due Diligence completed',
		pool_status: 'Pool pending',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-51',
		name: 'Investment Ventures',
		createdOn: '2024-02-10T14:55:30.876543',
		nbfc_logo: 'InvVent',
		aum: '80cr',
		credit_ratings: '5a4567b2-89c1-23d4-56e7-89a01234b5cd',
		irr: '28%',
		days_left_until_closure: 450,
		due_diligence_status: 'Due Diligence completed',
		pool_status: '',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-52',
		name: 'Finance Innovators',
		createdOn: '2024-02-15T16:10:20.345678',
		nbfc_logo: 'FinInnov',
		aum: '65cr',
		credit_ratings: '6b3456c3-45d8-12a7-67e9-01d23456c7b8',
		irr: '24%',
		days_left_until_closure: 550,
		due_diligence_status: 'Due Diligence rejected',
		pool_status: '',
		transaction_status: '',
		handover_status: '',
	},
	{
		pool_id: 'POOL-53',
		name: 'Capital Funders',
		createdOn: '2024-02-20T18:25:40.987654',
		nbfc_logo: 'CapFunds',
		aum: '100cr',
		credit_ratings: '7c6789d4-23a1-56b2-89c3-45d01234e5f6',
		irr: '20%',
		days_left_until_closure: 700,
		due_diligence_status: '',
		pool_status: '',
		transaction_status: '',
		handover_status: '',
	},
];

function BankDueDiligence() {
	const ddQuery = useDD();
	const datas = ddQuery.data ? ddQuery.data : [];

	// console.log(
	// 	'datas',
	// 	datas.map((item) => item.name),
	// );

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
				item.name.toLowerCase().includes(searchTerm.toLowerCase()),
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

	// if (ddQuery.isError) {
	// 	//
	// }

	// if (ddQuery.isSuccess) {
	// 	console.log(ddQuery.data);
	// }\\

	return (
		<>
			<HeaderComp title={'Due Diligence'} />
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
								Aum
							</Typography>
							<Typography style={{ fontSize: '0.6875rem' }}>
								AUM
							</Typography>
						</Box>
						<Box display="flex" flexDirection="column">
							<Typography
								style={{ fontSize: '0.875rem', color: '#00B85E' }}
							>
								A++++
							</Typography>
							<Typography style={{ fontSize: '0.6875rem' }}>
								Credit Ratings
							</Typography>
						</Box>
						<Box display="flex" flexDirection="column">
							<Typography style={{ fontSize: '0.875rem' }}>
								Irr
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
									backgroundImage: getBackgroundImage(10),
									color: getFontColor(10),
								}}
							>
								10 days left
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
					</Box>
					<Box sx={{ marginY: '1rem' }}>
						<BDDStepper
							dd={item.due_diligence_status}
							pool={item.pool_status}
							transaction={item.transaction_status}
							handedOver={item.handover_status}
							poolId={item.pool_id}
						></BDDStepper>
					</Box>
				</React.Fragment>
			))}
		</>
	);
}

export default BankDueDiligence;
