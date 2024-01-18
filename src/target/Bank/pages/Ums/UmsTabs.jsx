import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Box, Tab, Tabs } from '@mui/material';

export default function UmsTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}

	return (
		<div className="card-block">
			<div className="loan-pool-form-block">
				{/* <div className="title">Data Integration</div> */}
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
								label="Profile"
								sx={{
									paddingBottom: '0rem',
									paddingLeft: '0rem',
								}}
								{...a11yProps(0)}
								component={Link}
								to="profile"
							/>
							<Tab
								label="User Management"
								sx={{
									paddingBottom: '0rem',
								}}
								{...a11yProps(1)}
								component={Link}
								to="mgmt"
							/>
						</Tabs>
					</Box>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
