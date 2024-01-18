/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import CancelIcon from '@/assets/svg/CancelIcon';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomButton from '@/components/CustomButton';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import SearchFilter from './SearchFilter';
import {
	allFiltersDaysLeftAttribute,
	loanAssetPerDistrictAttribute,
	loanAssetPerStateAttribute,
	loanassetnbfcbranch,
	par30Attribute,
	par30PerNBFCBranchAttribute,
	par60Attribute,
	par60PerNBFCBranchAttribute,
	par90Attribute,
	par90PerNBFCBranchAttribute,
	par90PlusAttribute,
} from '../NBFC/pages/Ums/components/formAttributes';
import InputComponent from '@/components/DAInputComponent';
const customButtonStyle = {
	borderRadius: '7px',
	padding: '0.5rem 2.5rem',
	color: '#FFFFFF',
	backgroundColor: '#C4161C',
	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
	},
	fontWeight: '500',
};
// import {nbfcNameAttributes} from "./AllFilterFormAttribute"
const validationSchema = yup.object({
	par30: yup.string().required(' PAR 30 is required'),
	par60: yup.string().required('PAR 60 is required '),
	par90: yup.string().required('PAR 90 is required'),
	par90Plus: yup.string().required('PAR 90+ is required'),
});
const PoolAllFilter = () => {
	const [data, setData] = useState(null);
	const bank_name = 'Federal';
	const product_code = 'JLG';
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://52.66.247.118:30201/bank_product_filter/get_bank_product_filter/${bank_name}/${product_code}`,
				);
				const result = await response.json();
				setData(result);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [bank_name, product_code]);
	console.log(data);
	const [dpdRangeValue, setDpdRangeValue] = useState([0, 100]);
	const [interestRateRangeValue, setInterestRateRangeValue] = useState([0, 20]);
	const [loanRangeValue, setLoanRangeValue] = useState([20, 80]);
	const [FirstCycle, setFirstCycle] = useState([0, 100]);
	const [SecondCycle, setSecondCycle] = useState([0, 100]);
	const [CompletedTenor, setCompletedTenor] = useState([0, 50]);
	const [PoolSize, setPoolSize] = useState([0, 100]);
	const [BalanceTenor, setBalanceTenor] = useState([0, 100]);
	const [IRRRange, setIRRRange] = useState([0, 100]);
	const [AUM, setAUM] = useState([0, 50]);
	const handleDpdRangeChange = (event, newValue) => {
		setDpdRangeValue(newValue);
	};

	const handleInterestRateRangeChange = (event, newValue) => {
		setInterestRateRangeValue(newValue);
	};

	const handleLoanRangeChange = (event, newValue) => {
		setLoanRangeValue(newValue);
	};
	const handleFirstCycle = (event, newValue) => {
		setFirstCycle(newValue);
	};
	const handleSecondCycle = (event, newValue) => {
		setSecondCycle(newValue);
	};
	const handleCompletedTenor = (event, newValue) => {
		setCompletedTenor(newValue);
	};
	const handlePoolSize = (event, newValue) => {
		setPoolSize(newValue);
	};
	const handleBalanceTenore = (event, newValue) => {
		setBalanceTenor(newValue);
	};

	const formik = useFormik({
		initialValues: {
			// par30: '',
			// par60: '',
			// par90: '',
			// par90Plus: '',
			allFiltersDaysLeft: '',
			loanAssetPerDistrict: '',
			loanAssetPerState: '',
			loanassetnbfcbranch: '',
			par30: '',
			par30PerNBFCBranch: '',
			par60: '',
			par60PerNBFCBranch: '',
			par90: '',
			par90PerNBFCBranch: '',
			par90Plus: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log({ values });
		},
	});
	const [openDialog, setOpenDialog] = useState(false);
	const handleOpenDialog = (e) => {
		e.preventDefault();
		setOpenDialog(true);
	};
	const handleIRRRange = (event, newValue) => {
		setIRRRange(newValue.map(Math.round)); // Round to the nearest integer
	};
	const handleAUM = (event, newValue) => {
		setAUM(newValue.map(Math.round)); // Round to the nearest integer
	};

	return (
		<div className="card-block">
			<div className="loan-pool-form-block">
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						padding: '1rem',
					}}
				>
					<div className="title">
						<b>All Filters</b>
					</div>
					<div>
						<CancelIcon />
					</div>
				</div>
				<Grid container spacing={2}>
					<Grid item sm={4}>
						<Box sx={{ width: '200px', margin: '20px' }}>
							<Typography
								gutterBottom
								sx={{ fontSize: '0.7rem', color: '#8794C2' }}
							>
								DPD
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '10px',
									width: '80%',
								}}
							>
								<TextField
									value={dpdRangeValue[0]}
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginRight: '0.5rem',
										width: '100%',
									}}
								/>
								<div
									style={{
										background: '#8794C2',
										width: '2rem',
										height: '1.3px',
										marginTop: '0.7rem',
									}}
								></div>
								<TextField
									value={dpdRangeValue[1]}
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginLeft: '0.5rem',
										width: '100%',
									}}
								/>
								<Typography sx={{ marginLeft: '0.5rem' }}>
									days
								</Typography>
							</Box>
							<Box
								sx={{
									background: '#F8F9FB',
									marginTop: '10px',
									width: '100%',
									padding: '0rem 0.7rem',
									height: '2rem',
									borderRadius: '0.3rem',
								}}
							>
								<Slider
									value={dpdRangeValue}
									onChange={handleDpdRangeChange}
									valueLabelDisplay="auto"
									valueLabelFormat={(value) => value}
									min={0}
									max={100}
									sx={{
										'& .css-kqxaiy-MuiSlider-root': {
											color: 'red',
										},
										'& .MuiSlider-track': {
											border: '2px solid #C4161C',
											background: '#C4161C',
											height: '0rem',
										},
										'& .MuiSlider-thumb': {
											border: '2px solid #C4161C',
											background: '#FFFFFF',
											width: '1rem',
											height: '1rem',
										},
									}}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={4}>
						<Box sx={{ width: '200px', margin: '20px' }}>
							<Typography
								gutterBottom
								sx={{ fontSize: '0.7rem', color: '#8794C2' }}
							>
								Interest Rate
							</Typography>

							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '10px',
									width: '80%',
								}}
							>
								<TextField
									value={
										interestRateRangeValue[0].toFixed(1) + '%'
									} // Use [0] for min value
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginRight: '0.5rem',
										width: 'calc(50% - 0.25rem)',
									}}
								/>
								<div
									style={{
										background: '#8794C2',
										width: '2rem',
										height: '1.3px',
										marginTop: '0.7rem',
									}}
								></div>
								<TextField
									value={
										interestRateRangeValue[1].toFixed(1) + '%'
									} // Use [1] for max value
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginLeft: '0.5rem',
										width: 'calc(50% - 0.25rem)',
									}}
								/>
							</Box>

							<Box
								sx={{
									background: '#F8F9FB',
									marginTop: '10px',
									width: '100%',
									padding: '0rem 0.7rem',
									height: '2rem',
									borderRadius: '0.3rem',
								}}
							>
								<Slider
									value={interestRateRangeValue}
									onChange={handleInterestRateRangeChange}
									valueLabelDisplay="auto"
									valueLabelFormat={(value) =>
										`${value.toFixed(1)}%`
									}
									// min={Object.keys(data).length || 0}
									// max={Object.keys(data).length || 0}
									min={0}
									max={100}
									step={0.01}
									sx={{
										'& .css-kqxaiy-MuiSlider-root': {
											color: 'red',
										},
										'& .MuiSlider-track': {
											border: '2px solid #C4161C',
											background: '#C4161C',
											height: '0rem',
										},
										'& .MuiSlider-thumb': {
											border: '2px solid #C4161C',
											background: '#FFFFFF',
											width: '0.85rem',
											height: '0.85rem',
										},
									}}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={4}>
						<Box sx={{ width: '200px', margin: '20px' }}>
							<Typography
								gutterBottom
								sx={{ fontSize: '0.7rem', color: '#8794C2' }}
							>
								First Cycle Loan Outstanding
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '10px',
									width: '80%',
								}}
							>
								<TextField
									value={`${FirstCycle[0]}k`} // Format the value with "k"
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginRight: '0.5rem',
										width: '100%',
									}}
								/>
								<div
									style={{
										background: '#8794C2',
										width: '2rem',
										height: '1.3px',
										marginTop: '0.7rem',
									}}
								></div>
								<TextField
									value={`${FirstCycle[1]}k`} // Format the value with "k"
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginLeft: '0.5rem',
										width: '100%',
									}}
								/>
							</Box>

							<Box
								sx={{
									background: '#F8F9FB',
									marginTop: '10px',
									width: '100%',
									padding: '0rem 0.7rem',
									height: '2rem',
									borderRadius: '0.3rem',
								}}
							>
								<Slider
									value={FirstCycle}
									onChange={handleFirstCycle}
									valueLabelDisplay="auto"
									valueLabelFormat={(value) => value}
									min={0}
									max={100}
									sx={{
										'& .css-kqxaiy-MuiSlider-root': {
											color: 'red',
										},
										'& .MuiSlider-track': {
											border: '2px solid #C4161C',
											background: '#C4161C',
											height: '0rem',
										},
										'& .MuiSlider-thumb': {
											border: '2px solid #C4161C',
											background: '#FFFFFF',
											width: '1rem',
											height: '1rem',
										},
									}}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={4}>
						<Box sx={{ width: '200px', margin: '20px' }}>
							<Typography
								gutterBottom
								sx={{ fontSize: '0.7rem', color: '#8794C2' }}
							>
								Second Cycle Loan Outstanding
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '10px',
									width: '80%',
								}}
							>
								<TextField
									value={`${SecondCycle[0]}k`} // Format the value with "k"
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginRight: '0.5rem',
										width: '100%',
									}}
								/>
								<div
									style={{
										background: '#8794C2',
										width: '2rem',
										height: '1.3px',
										marginTop: '0.7rem',
									}}
								></div>
								<TextField
									value={`${SecondCycle[1]}k`} // Format the value with "k"
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginLeft: '0.5rem',
										width: '100%',
									}}
								/>
							</Box>

							<Box
								sx={{
									background: '#F8F9FB',
									marginTop: '10px',
									width: '100%',
									padding: '0rem 0.7rem',
									height: '2rem',
									borderRadius: '0.3rem',
								}}
							>
								<Slider
									value={SecondCycle}
									onChange={handleSecondCycle}
									valueLabelDisplay="auto"
									valueLabelFormat={(value) => value}
									min={0}
									max={100}
									sx={{
										'& .css-kqxaiy-MuiSlider-root': {
											color: 'red',
										},
										'& .MuiSlider-track': {
											border: '2px solid #C4161C',
											background: '#C4161C',
											height: '0rem',
										},
										'& .MuiSlider-thumb': {
											border: '2px solid #C4161C',
											background: '#FFFFFF',
											width: '1rem',
											height: '1rem',
										},
									}}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={4}>
						<Box sx={{ width: '200px', margin: '20px' }}>
							<Typography
								gutterBottom
								sx={{ fontSize: '0.7rem', color: '#8794C2' }}
							>
								Completed Tenor (in months)
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '10px',
									width: '80%',
								}}
							>
								<TextField
									value={CompletedTenor[0]}
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginRight: '0.5rem',
										width: '100%',
									}}
								/>
								<div
									style={{
										background: '#8794C2',
										width: '2rem',
										height: '1.3px',
										marginTop: '0.7rem',
									}}
								></div>
								<TextField
									value={CompletedTenor[1]}
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginLeft: '0.5rem',
										width: '100%',
									}}
								/>
								<Typography sx={{ marginLeft: '0.5rem' }}>
									Months
								</Typography>
							</Box>
							<Box
								sx={{
									background: '#F8F9FB',
									marginTop: '10px',
									width: '100%',
									padding: '0rem 0.7rem',
									height: '2rem',
									borderRadius: '0.3rem',
								}}
							>
								<Slider
									value={CompletedTenor}
									onChange={handleCompletedTenor}
									valueLabelDisplay="auto"
									valueLabelFormat={(value) => value}
									min={0}
									max={50}
									sx={{
										'& .css-kqxaiy-MuiSlider-root': {
											color: 'red',
										},
										'& .MuiSlider-track': {
											border: '2px solid #C4161C',
											background: '#C4161C',
											height: '0rem',
										},
										'& .MuiSlider-thumb': {
											border: '2px solid #C4161C',
											background: '#FFFFFF',
											width: '1rem',
											height: '1rem',
										},
									}}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={4}>
						<Box sx={{ width: '200px', margin: '20px' }}>
							<Typography
								gutterBottom
								sx={{ fontSize: '0.7rem', color: '#8794C2' }}
							>
								Total Pool Size
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '10px',
									width: '80%',
								}}
							>
								<TextField
									value={`${PoolSize[0]}k`} // Format the value with "k"
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginRight: '0.5rem',
										width: '100%',
									}}
								/>
								<div
									style={{
										background: '#8794C2',
										width: '2rem',
										height: '1.3px',
										marginTop: '0.7rem',
									}}
								></div>
								<TextField
									value={`${PoolSize[1]}k`}
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginLeft: '0.5rem',
										width: '100%',
									}}
								/>
							</Box>

							<Box
								sx={{
									background: '#F8F9FB',
									marginTop: '10px',
									width: '100%',
									padding: '0rem 0.7rem',
									height: '2rem',
									borderRadius: '0.3rem',
								}}
							>
								<Slider
									value={PoolSize}
									onChange={handlePoolSize}
									valueLabelDisplay="auto"
									valueLabelFormat={(value) => value}
									min={0}
									max={100}
									sx={{
										'& .css-kqxaiy-MuiSlider-root': {
											color: 'red',
										},
										'& .MuiSlider-track': {
											border: '2px solid #C4161C',
											background: '#C4161C',
											height: '0rem',
										},
										'& .MuiSlider-thumb': {
											border: '2px solid #C4161C',
											background: '#FFFFFF',
											width: '1rem',
											height: '1rem',
										},
									}}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={4}>
						<Box sx={{ width: '200px', margin: '20px' }}>
							<Typography
								gutterBottom
								sx={{ fontSize: '0.7rem', color: '#8794C2' }}
							>
								Balance Tenor (in months)
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '10px',
									width: '80%',
								}}
							>
								<TextField
									value={BalanceTenor[0]}
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginRight: '0.5rem',
										width: '100%',
									}}
								/>
								<div
									style={{
										background: '#8794C2',
										width: '2rem',
										height: '1.3px',
										marginTop: '0.7rem',
									}}
								></div>
								<TextField
									value={BalanceTenor[1]}
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginLeft: '0.5rem',
										width: '100%',
									}}
								/>
							</Box>
							<Box
								sx={{
									background: '#F8F9FB',
									marginTop: '10px',
									width: '100%',
									padding: '0rem 0.7rem',
									height: '2rem',
									borderRadius: '0.3rem',
								}}
							>
								<Slider
									value={BalanceTenor}
									onChange={handleBalanceTenore}
									valueLabelDisplay="auto"
									valueLabelFormat={(value) => value}
									min={0}
									max={100}
									sx={{
										'& .css-kqxaiy-MuiSlider-root': {
											color: 'red',
										},
										'& .MuiSlider-track': {
											border: '2px solid #C4161C',
											background: '#C4161C',
											height: '0rem',
										},
										'& .MuiSlider-thumb': {
											border: '2px solid #C4161C',
											background: '#FFFFFF',
											width: '1rem',
											height: '1rem',
										},
									}}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={4}>
						<Box sx={{ width: '200px', margin: '20px' }}>
							<Typography
								gutterBottom
								sx={{ fontSize: '0.7rem', color: '#8794C2' }}
							>
								IRR Range
							</Typography>

							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '10px',
									width: '80%',
								}}
							>
								<TextField
									value={IRRRange[0] + '%'} // Use [0] for min value
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginRight: '0.5rem',
										width: 'calc(50% - 0.25rem)',
									}}
								/>
								<div
									style={{
										background: '#8794C2',
										width: '2rem',
										height: '1.3px',
										marginTop: '0.7rem',
									}}
								></div>
								<TextField
									value={IRRRange[1] + '%'} // Use [1] for max value
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginLeft: '0.5rem',
										width: 'calc(50% - 0.25rem)',
									}}
								/>
							</Box>

							<Box
								sx={{
									background: '#F8F9FB',
									marginTop: '10px',
									width: '100%',
									padding: '0rem 0.7rem',
									height: '2rem',
									borderRadius: '0.3rem',
								}}
							>
								<Slider
									value={IRRRange}
									onChange={handleIRRRange}
									valueLabelDisplay="auto"
									valueLabelFormat={(value) => `${value}%`}
									min={0}
									max={20}
									step={0.01}
									sx={{
										'& .css-kqxaiy-MuiSlider-root': {
											color: 'red',
										},
										'& .MuiSlider-track': {
											border: '2px solid #C4161C',
											background: '#C4161C',
											height: '0rem',
										},
										'& .MuiSlider-thumb': {
											border: '2px solid #C4161C',
											background: '#FFFFFF',
											width: '0.85rem',
											height: '0.85rem',
										},
									}}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={4}>
						<Box sx={{ width: '200px', margin: '20px' }}>
							<Typography
								gutterBottom
								sx={{ fontSize: '0.7rem', color: '#8794C2' }}
							>
								AMU
							</Typography>

							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									marginTop: '10px',
									width: '80%',
								}}
							>
								<TextField
									value={'₹' + AUM[0] + 'L'} // Use [0] for min value
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginRight: '0.5rem',
										width: 'calc(50% - 0.25rem)',
									}}
								/>
								<div
									style={{
										background: '#8794C2',
										width: '2rem',
										height: '1.3px',
										marginTop: '0.7rem',
									}}
								></div>
								<TextField
									value={'₹' + AUM[1] + 'L'} // Use [1] for max value
									variant="outlined"
									size="small"
									fullWidth
									disabled
									sx={{
										'& .MuiOutlinedInput-input': {
											padding: '0px',
										},
										marginLeft: '0.5rem',
										width: 'calc(50% - 0.25rem)',
									}}
								/>
							</Box>

							<Box
								sx={{
									background: '#F8F9FB',
									marginTop: '10px',
									width: '100%',
									padding: '0rem 0.7rem',
									height: '2rem',
									borderRadius: '0.3rem',
								}}
							>
								<Slider
									value={AUM}
									onChange={handleAUM}
									valueLabelDisplay="auto"
									valueLabelFormat={(value) => `${value}L`}
									min={0}
									max={20}
									step={0.01}
									sx={{
										'& .css-kqxaiy-MuiSlider-root': {
											color: 'red',
										},
										'& .MuiSlider-track': {
											border: '2px solid #C4161C',
											background: '#C4161C',
											height: '0rem',
										},
										'& .MuiSlider-thumb': {
											border: '2px solid #C4161C',
											background: '#FFFFFF',
											width: '0.85rem',
											height: '0.85rem',
										},
									}}
								/>
							</Box>
						</Box>
					</Grid>
				</Grid>
				<form onSubmit={formik.handleSubmit}>
					<Grid container sx={{ padding: '1.3rem' }}>
						<Grid item sm={4} className="pr-2">
							<InputComponent
								{...allFiltersDaysLeftAttribute(formik)}
							/>
						</Grid>
					</Grid>
					<hr
						style={{
							borderTop: '1px solid rgba(135, 148, 194, 0.20)',
							margin: '1rem 1rem 2rem ',
						}}
					/>
					<Grid container sx={{ padding: '1.3rem' }}>
						<Grid item sm={4} className="pr-2">
							<InputComponent {...par30Attribute(formik)} />
						</Grid>
						<Grid item sm={4} className="pr-2">
							<InputComponent {...par60Attribute(formik)} />
						</Grid>
						<Grid item sm={4} className="pr-2">
							<InputComponent {...par90Attribute(formik)} />
						</Grid>
						<Grid item sm={4} className="pr-2">
							<InputComponent {...par90PlusAttribute(formik)} />
						</Grid>
					</Grid>
					<hr
						style={{
							borderTop: '1px solid rgba(135, 148, 194, 0.20)',
							margin: '1rem 1rem 2rem ',
						}}
					/>

					<Grid container sx={{ padding: '1.3rem' }}>
						<Grid item sm={4} className="pr-2">
							<SearchFilter
								title="NBFC Name"
								options={[
									'NBFC Name 1',
									'NBFC Name 2',
									'NBFC Name 3',
								]}
								defaultOption="Select NBFC Branch"
								width="100%"
								background="#EFEFEF"
								borderColor="rgba(0, 0, 0, 0.2)"
								fontSize="1rem"
								placeholder="Search NBFC Name"
								placeholderColor="#333333"
							/>
						</Grid>
						<Grid item sm={4} className="pr-2">
							<SearchFilter
								title="Credit Rating"
								options={['AAA+', 'AA+', 'A+']}
								defaultOption="Select NBFC Branch"
								width="100%"
								background="#EFEFEF"
								borderColor="rgba(0, 0, 0, 0.2)"
								fontSize="1rem"
								placeholder="Search credit ratings"
								placeholderColor="#333333"
							/>
						</Grid>
						<Grid item sm={4} className="pr-2">
							<SearchFilter
								title="State"
								options={['Tamil Nadu', 'Karnataka', 'Kerala']}
								defaultOption="Select NBFC Branch"
								width="100%"
								background="#EFEFEF"
								borderColor="rgba(0, 0, 0, 0.2)"
								fontSize="1rem"
								placeholder="Search State"
								placeholderColor="#333333"
							/>
						</Grid>
						<Grid
							item
							sm={4}
							className="pr-2"
							sx={{ marginTop: '2.5rem' }}
						>
							<SearchFilter
								title="Dirstict"
								options={['District 1', 'District 2', 'District  3']}
								defaultOption="Select NBFC Branch"
								width="100%"
								background="#EFEFEF"
								borderColor="rgba(0, 0, 0, 0.2)"
								fontSize="1rem"
								placeholder="Search district"
								placeholderColor="#333333"
							/>
						</Grid>
						<Grid
							item
							sm={4}
							className="pr-2"
							sx={{ marginTop: '2.5rem' }}
						>
							<SearchFilter
								title="NBFC MFI Branch "
								options={[
									'NBFC MFI Branch 1',
									'NBFC MFI Branch 3',
									'NBFC MFI Branch 3',
								]}
								defaultOption="Select NBFC Branch"
								width="100%"
								background="#EFEFEF"
								borderColor="rgba(0, 0, 0, 0.2)"
								fontSize="1rem"
								placeholder="Search NBFC MFI branch"
								placeholderColor="#333333"
							/>
						</Grid>
					</Grid>
					<hr
						style={{
							borderTop: '1px solid rgba(135, 148, 194, 0.20)',
							margin: '1rem 1rem 2rem ',
						}}
					/>
					<Grid container sx={{ padding: '1.3rem' }}>
						<Grid item sm={4} className="pr-2">
							<InputComponent {...loanassetnbfcbranch(formik)} />
						</Grid>
						<Grid item sm={4} className="pr-2">
							<InputComponent
								{...loanAssetPerDistrictAttribute(formik)}
							/>
						</Grid>
						<Grid item sm={4} className="pr-2">
							<InputComponent
								{...loanAssetPerStateAttribute(formik)}
							/>
						</Grid>
						<Grid item sm={4} className="pr-2">
							<InputComponent
								{...par30PerNBFCBranchAttribute(formik)}
							/>
						</Grid>
						<Grid item sm={4} className="pr-2">
							<InputComponent
								{...par60PerNBFCBranchAttribute(formik)}
							/>
						</Grid>
						<Grid item sm={4} className="pr-2">
							<InputComponent
								{...par90PerNBFCBranchAttribute(formik)}
							/>
						</Grid>
					</Grid>
					<Grid container>
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
								customStyle={customButtonStyle}
								onClick={handleOpenDialog}
							>
								Cancel &nbsp;
							</CustomButton>
							<CustomButton
								buttonDisabled={false}
								customStyle={customButtonStyle}
								onClick={handleOpenDialog}
								style={{ marginLeft: '1rem' }}
							>
								Apply &nbsp;
								<ArrowForwardIosIcon fontSize="11" />
							</CustomButton>
						</Grid>
					</Grid>
				</form>
			</div>
		</div>
	);
};

export default PoolAllFilter;
