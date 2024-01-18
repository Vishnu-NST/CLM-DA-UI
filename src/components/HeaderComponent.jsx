/* eslint-disable no-unused-vars */
import React from 'react';
import {
	Box,
	Card,
	Grid,
	InputAdornment,
	Tab,
	Tabs,
	TextField,
	Typography,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NewNotification from '../assets/svg/NewNotification';
import NoNotification from '../assets/svg/NoNotification';
import LogoIcon from '../assets/svg/LogoIcon';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const HeaderComp = ({ title, breadCrumbs, TabsComp, SearchComp }) => {
	const notification = true;
	const navigate = useNavigate();

	function CustomTabPanel(props) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box sx={{ p: 3 }}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}

	CustomTabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	};

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box
			align="center"
			sx={{
				paddingLeft: '0.7rem',
			}}
		>
			<Card
				elevation={0}
				sx={{
					backgroundColor: '#F8F9FB',
					height: '4rem',
					borderRadius: '0rem',
					p: 1,
				}}
			>
				<Grid container>
					<Grid align="left" item sm={2.5}>
						<Typography
							sx={{
								ml: 1,
								fontFamily: 'Poppins, sans-serif',
								fontSize: '0.875rem',
								fontWeight: 400,
								color: '#8794C2',
							}}
						>
							<div className="flex">
								{breadCrumbs?.map((item, idx) => {
									return (
										<div
											key={idx}
											onClick={() => navigate(item?.path)}
											style={{
												cursor: 'pointer',
											}}
										>
											{idx !== 0 && <>&nbsp;/ &nbsp;</>}
											{item?.data}
										</div>
									);
								})}
							</div>
						</Typography>
						<Typography
							sx={{
								ml: 1,
								fontFamily: 'Poppins, sans-serif',
								fontSize: '1.3rem',
								fontWeight: 600,
								color: '#1B1B1B',
								mt: 1,
							}}
						>
							{title}
						</Typography>
					</Grid>
					<Grid align="left" sm={4} item>
						{TabsComp && <TabsComp />}
					</Grid>
					<Grid
						align="right"
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
						}}
						item
						sm={5.3}
					>
						{SearchComp && <SearchComp />}
						&nbsp; &nbsp; &nbsp;
						<LogoIcon />
						&nbsp; &nbsp;
						<div>NBFC Logo</div>
						&nbsp;
						{notification == true ? (
							<NewNotification />
						) : (
							<NoNotification />
						)}
						{/* <Box>
							<Box sx={{ width: '100%', mt: 1 }}>
								<Tabs
									value={value}
									onChange={handleChange}
									aria-label="secondary tabs example"
									sx={{
										'& .Mui-selected': {
											color: '#C4161C',
										},
										'& .MuiTabs-indicator': {
											backgroundColor: '#C4161C',
										},
									}}
								>
									<Tab
										label="Create Loan Pool"
										{...a11yProps(0)}
									/>
									<Tab label="View Loan Pool" {...a11yProps(1)} />
								</Tabs>
							</Box>
							<CustomTabPanel value={value} index={0}>
								Item One
							</CustomTabPanel>
							<CustomTabPanel value={value} index={1}>
								Item Two
							</CustomTabPanel>
						</Box> */}
					</Grid>
					{/* <Grid align="left" item xs={3}>
						<TextField
							sx={{
								mt: 1.5,
								backgroundColor: '#FFFFFF',
								'& input': {
									height: '10px', // Adjust the height as needed
								},
							}}
							color="error"
							label="Search"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchOutlinedIcon />
									</InputAdornment>
								),
							}}
							variant="outlined"
						/>
					</Grid> */}
					{/* <Grid align="right" item xs={2}>
						<span>
							<LogoIcon />
						</span>
						<span>Bank/NBFC Logo</span>
					</Grid>
					<Grid align="right" item xs={1} sx={{ ml: 3 }}>
						{notification == true ? (
							<NewNotification />
						) : (
							<NoNotification />
						)}
					</Grid> */}
				</Grid>
			</Card>
		</Box>
	);
};
export default HeaderComp;
