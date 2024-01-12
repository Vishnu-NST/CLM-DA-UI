import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import SearchIcon from '../../assets/svg/SearchIcon';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import PoolItemComp from './components/PoolItemComp';
import SignalIcon from '../../assets/svg/SignalIcon';
import Lock from '../../assets/svg/Lock';
import FilteredItemComp from './components/FilteredItemComp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './SelectPool.scss';
import InputComponent from '@/components/InputComponent';
import SelectComponent from '@/components/SelectComponent';
import CustomButton from '@/components/CustomButton';

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

const SelectPool = () => {
	const [poolName, setPoolName] = React.useState();
	const [poolFilter, setPoolFilter] = React.useState('');
	const [labelIndex, setLabelIndex] = React.useState(0);
	const labels = [
		'Search Pool Name',
		'Search AUM',
		'Search Credit Ratings',
		'Search Average IRR',
	];

	useEffect(() => {
		// Update label every 3 seconds
		const intervalId = setInterval(() => {
			setLabelIndex((prevIndex) => (prevIndex + 1) % labels.length);
		}, 2000);

		return () => clearInterval(intervalId); // Cleanup interval on component unmount
	}, []);

	const searchPoolNameAttributes = {
		id: 'poolName',
		name: 'poolName',
		// placeholder: "Search Pool Name",
		placeholder: `Search ${labels[labelIndex].split(' ')[1]} ${
			labels[labelIndex].split(' ')[2] || ''
		}`,
		type: 'text',
		value: poolName,
		onChange: (event) => {
			console.log({ event });
			setPoolName(event.target.value);
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

	const poolFilterListAttributes = {
		id: 'poolFilter',
		name: 'poolFilter',
		displayEmpty: true,
		multiple: false,
		placeholder: 'Select Pool type',
		type: 'text',
		value: poolFilter,
		onChange: (event) => {
			setPoolFilter(event.target.value);
		},
		disabled: false,
		options: [
			{
				label: 'All Pools',
				value: 'all',
			},
			{
				label: 'Locked Pools',
				value: 'locked',
			},
			{
				label: 'Unlocked Pools',
				value: 'unlocked',
			},
		],
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
		<div className="p-3">
			<Grid container>
				<Grid item sm={7} className="flex-start">
					<div
						style={{
							width: '18rem',
						}}
					>
						<InputComponent {...searchPoolNameAttributes} />
					</div>
					&nbsp; &nbsp;
					<div className="filter-box">
						<div>Filters</div>
						&nbsp; &nbsp;
						<FilterListOutlinedIcon
							style={{
								fontSize: '1.15rem',
							}}
						/>
					</div>
				</Grid>
				<Grid item sm={5} className="filters-block">
					<div
						style={{
							width: '10rem',
						}}
					>
						<SelectComponent {...poolFilterListAttributes} />
					</div>
					&nbsp; &nbsp; &nbsp; &nbsp;
					<CustomButton
						buttonType={'submit'}
						buttonDisabled={false}
						customStyle={customButtonStyle}
					>
						View Statistics &nbsp;&nbsp;
						<SignalIcon fill={'white'} width={10} height={10} />
					</CustomButton>
					&nbsp; &nbsp; &nbsp; &nbsp;
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
	);
};

export default SelectPool;
