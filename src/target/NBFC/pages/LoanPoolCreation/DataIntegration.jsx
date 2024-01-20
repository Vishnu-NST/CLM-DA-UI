import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import SFTPIntegration from './SFTPIntegration';
import APIIntegration from './APIIntegration';
import * as yup from 'yup';
import { useFormik } from 'formik';

const sftpValidationSchema = yup.object({
	sftp_username: yup.string().required('User Name is required'),
	sftp_filename: yup.string().required('File Name is required'),
	sftp_password: yup.string().required('Password is required'),
	sftp_url: yup.string().required('Url is required'),
	sftp_time: yup.string().required('Time is required'),
});

const apiValidationSchema = yup.object({
	api_prod_ipaddress: yup.string().required('IP address is required'),
	api_prod_port: yup.string().required('Port is required'),
	api_uat_ipaddress: yup.string().required('IP address is required'),
	api_uat_port: yup.string().required('Port is required'),
});

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

const DataIntegration = ({ onFileUpload, onApiIntegrationFormSubmit }) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const sftpFormik = useFormik({
		initialValues: {
			sftp_username: '',
			sftp_filename: '',
			sftp_password: '',
			sftp_url: '',
			sftp_time: '',
		},
		validationSchema: sftpValidationSchema,
		onSubmit: async (values) => {
			console.log({ values });
			setValue(1);
		},
	});

	const apiFormik = useFormik({
		initialValues: {
			api_prod_swagger_link: 'DA.Mifix.co.in',
			api_prod_ipaddress: '',
			api_prod_port: '',
			api_uat_ipaddress: '',
			api_uat_port: '',
			api_uat_swagger_link: 'swagger.DA-UAT.mifix.co.in',
		},
		validationSchema: apiValidationSchema,
		onSubmit: async (values) => {
			console.log({ values });
			onApiIntegrationFormSubmit({
				...sftpFormik.values,
				...apiFormik.values,
			});
		},
	});

	return (
		<div className="card-block">
			<div className="loan-pool-form-block">
				<div className="title">Data Integration</div>
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
									textTransform: 'none',
								}}
								{...a11yProps(0)}
							/>
							<Tab
								label="API Integration"
								sx={{
									paddingBottom: '0rem',
									textTransform: 'none',
								}}
								{...a11yProps(1)}
							/>
						</Tabs>
					</Box>
					<CustomTabPanel value={value} index={0}>
						<SFTPIntegration
							sftpFormik={sftpFormik}
							onFileUpload={(file) => onFileUpload(file)}
						/>
					</CustomTabPanel>
					<CustomTabPanel value={value} index={1}>
						<APIIntegration apiFormik={apiFormik} />
					</CustomTabPanel>
				</div>
			</div>
		</div>
	);
};

export default DataIntegration;
