import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import SFTPIntegration from './SFTPIntegration';
import APIIntegration from './APIIntegration';
import HeaderComp from '@/components/HeaderComponent';

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

const DemandCollection = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<HeaderComp title={'Demand Collection'} />
			<div className="card-block">
				<div className="loan-pool-form-block">
					<div className="title">Demand Data</div>
					<div>
						<Box
							sx={{
								paddingTop: '1rem',
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
										fontWeight: '600',
										fontSize: '0.8rem',
									},
									fontWeight: '600',
									color: '#8794C2',
								}}
							>
								<Tab
									label="SFTP Integration"
									sx={{
										paddingBottom: '0rem',
										paddingLeft: '0rem',
									}}
									{...a11yProps(0)}
								/>
								<Tab
									label="API Integration"
									sx={{
										paddingBottom: '0rem',
									}}
									{...a11yProps(1)}
								/>
							</Tabs>
						</Box>
						<CustomTabPanel value={value} index={0}>
							<SFTPIntegration />
						</CustomTabPanel>
						<CustomTabPanel value={value} index={1}>
							<APIIntegration />
						</CustomTabPanel>
					</div>
				</div>
			</div>
		</>
	);
};

export default DemandCollection;
