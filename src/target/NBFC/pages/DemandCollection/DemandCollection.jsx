import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import HeaderComp from '@/components/HeaderComponent';
import DemandData from './DemandData';
import CollectionData from './CollectionData';

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
				<Box sx={{ pt: 5, pb: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const breadCrumbs = [
	{
		data: 'Menu',
		path: null,
	},
	{
		data: 'Demand Collection',
		path: null,
	},
];

const DemandCollection = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const TabComponent = () => {
		return (
			<>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: 'rgba(112, 126, 174, 0.2)',
						width: 'fit-content',
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
						TabIndicatorProps={{
							style: {
								backgroundColor: '#C4161C',
							},
						}}
						sx={{
							'& .MuiTab-root.Mui-selected': {
								color: '#C4161C',
								fontFamily: 'Poppins, sans-serif',
								fontWeight: '600',
								fontSize: '0.8rem',
							},
							fontFamily: 'Poppins, sans-serif',
							fontSize: '0.8rem',
							fontWeight: '600',
							color: '#8794C2',
						}}
					>
						<Tab
							label="Demand"
							sx={{
								paddingBottom: '0rem',
								paddingLeft: '0rem',
								fontSize: '0.8rem',
								fontFamily: 'Poppins, sans-serif',
								textTransform: 'none',
							}}
							{...a11yProps(0)}
						/>
						<Tab
							label="Collection"
							sx={{
								paddingBottom: '0rem',
								fontSize: '0.8rem',
								fontFamily: 'Poppins, sans-serif',
								textTransform: 'none',
							}}
							{...a11yProps(1)}
						/>
					</Tabs>
				</Box>
			</>
		);
	};

	return (
		<>
			<HeaderComp
				title={'Demand Collection'}
				breadCrumbs={breadCrumbs}
				TabsComp={TabComponent}
			/>
			<CustomTabPanel value={value} index={0}>
				<DemandData />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<CollectionData />
			</CustomTabPanel>
		</>
	);
};

export default DemandCollection;
