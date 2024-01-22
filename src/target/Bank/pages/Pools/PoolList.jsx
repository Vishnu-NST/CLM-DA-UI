import { Grid } from '@mui/material';
import React from 'react';
import SearchIcon from '../../../../assets/svg/SearchIcon';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import PoolItemComp from './components/PoolItemComp';
import Lock from '../../../../assets/svg/Lock';
import FilteredItemComp from './components/FilteredItemComp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InputComponent from '@/components/InputComponent';
import CustomButton from '@/components/CustomButton';
import './Pool.scss';
import HeaderComp from '@/components/HeaderComponent';

const arrowBtnStyle = {
	border: '1px solid rgba(112, 126, 174, 0.5)',
	borderRadius: '7px',
	padding: '0.3rem 0.2rem',
	width: 'fit-content',
	minWidth: 'fit-content',
	color: '#C4161C',
};

const customButtonStyle = {
	borderRadius: '7px',
	// padding: "0rem 1rem",
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '#FFFFFF',
	fontSize: '0.7rem',
	backgroundColor: '#C4161C',
	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
	},
	fontWeight: '500',
};

const processBtnStyle = {
	borderRadius: '7px',
	padding: '0.5rem 1.3rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '#FFFFFF',
	fontSize: '0.7rem',
	backgroundColor: '#C4161C',
	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
	},
	fontWeight: '500',
};

const secondaryBtnStyle = {
	borderRadius: '7px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#FFFFFF',
	fontSize: '0.7rem',
	color: '#C4161C',
	fontWeight: 600,
	border: '1px solid #C4161C',
	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
	},
};

const PoolList = () => {
	const [searchVal, setSearchVal] = React.useState();

	const customerNameAttributes = {
		id: 'customerName',
		name: 'customerName',
		placeholder: `Search Customer Name`,
		type: 'text',
		value: searchVal,
		onChange: (event) => {
			setSearchVal(event.target.value);
		},
		onkeydown: (evt) => {
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

	const poolList = [
		{
			poolName: 'MUTH-JLG April 23-1',
			addedDate: '15th april 2023',
			poolLogo: '',
			aumValue: '50 cr',
			creditRatings: 'AAA+',
			averageIRR: '30%',
			daysLeft: '10',
			status: 'unlock',
		},
		{
			poolName: 'TATA-JLG April 23-1',
			addedDate: '15th april 2023',
			poolLogo: '',
			aumValue: '50 cr',
			creditRatings: 'BB+',
			averageIRR: '30%',
			daysLeft: '18',
			status: 'unlock',
		},
		{
			poolName: 'MANA-JLG April 23-1',
			addedDate: '15th april 2023',
			poolLogo: '',
			aumValue: '50 cr',
			creditRatings: 'CC+',
			averageIRR: '30%',
			daysLeft: '30',
			status: 'lock',
		},
		{
			poolName: 'IIFC-JLG April 23-1',
			addedDate: '15th april 2023',
			poolLogo: '',
			aumValue: '50 cr',
			creditRatings: 'AAA+',
			averageIRR: '30%',
			daysLeft: '20',
			status: 'unlock',
		},
		{
			poolName: 'TATA-JLG April 23-1',
			addedDate: '15th april 2023',
			poolLogo: '',
			aumValue: '50 cr',
			creditRatings: 'BB+',
			averageIRR: '30%',
			daysLeft: '25',
			status: 'lock',
		},
	];

	const filteredItems = [
		'05-10 days',
		'7.5%-8.5%',
		'Muthoot Finance',
		'Tamil Nadu',
	];

	return (
		<>
			<HeaderComp
				title={'My Pool List'}
				breadCrumbs={[{ data: 'My Pool List', path: null }]}
			/>
			<div className="p-3">
				<Grid container>
					<Grid item sm={7} className="flex-start">
						<div
							style={{
								width: '18rem',
							}}
						>
							<InputComponent {...customerNameAttributes} />
						</div>
					</Grid>
					<Grid item sm={5} className="filters-block">
						<div className="flex">
							<div className="pagination-txt">01-10 of 100</div>
							&nbsp;
							<div className="flex">
								<CustomButton customStyle={arrowBtnStyle}>
									<KeyboardArrowLeftOutlinedIcon />
								</CustomButton>
								&nbsp;
								<CustomButton customStyle={arrowBtnStyle}>
									<KeyboardArrowRightOutlinedIcon />
								</CustomButton>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item sm={12} className="flex mb-1">
						{filteredItems?.map((item, idx) => {
							return <FilteredItemComp data={item} key={idx} />;
						})}
					</Grid>
				</Grid>
				{/* Pool list */}
				<div className="pool-list-block">
					{poolList?.map((item, idx) => {
						return <PoolItemComp poolData={item} idx={idx} key={idx} />;
					})}
				</div>
				<Grid container className="mt-3">
					<Grid
						item
						sm={12}
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
						}}
					>
						<CustomButton
							buttonDisabled={false}
							customStyle={secondaryBtnStyle}
						>
							Customer details &nbsp;
							<ArrowForwardIosIcon fontSize="11" />
						</CustomButton>
						&nbsp; &nbsp; &nbsp;
						<CustomButton
							buttonDisabled={false}
							customStyle={customButtonStyle}
						>
							<Lock fill={'white'} />
							&nbsp;Lock All Pools
						</CustomButton>
					</Grid>
				</Grid>
				<Grid conatiner className="mt-3">
					<Grid item sm={12} className="fixed-box">
						<CustomButton
							buttonDisabled={false}
							customStyle={processBtnStyle}
						>
							Process &nbsp;
							<ArrowForwardIosIcon fontSize="11" />
						</CustomButton>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default PoolList;
