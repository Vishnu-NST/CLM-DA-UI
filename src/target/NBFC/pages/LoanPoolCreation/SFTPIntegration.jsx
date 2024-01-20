/* eslint-disable no-unused-vars */
import { useFormik } from 'formik';
import ProtocolIcon from '../../../../assets/svg/ProtocolIcon';
import LinkIcon from '../../../../assets/svg/LinkIcon';
import * as yup from 'yup';
import { Divider, Grid } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import CustomButton from '@/components/CustomButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
	fileNameAttributes,
	frequencyAttributes,
	noOfTimeAttributes,
	passwordAttributes,
	timeAttributes,
	urlAttributes,
	userNameAttributes,
} from './utils/sftpFormAttributes';
import UploadedFileComp from './components/UploadedFileComp';
import InputComponent from '@/components/InputComponent';
import SelectComponent from '@/components/SelectComponent';

const customButtonStyle = {
	borderRadius: '7px',
	padding: '0.4rem 1.5rem',
	color: '#FFFFFF',
	backgroundColor: '#C4161C',
	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
	},
	fontWeight: '500',
};

const backBtnStyle = {
	borderRadius: '7px',
	padding: '0.4rem 2rem',
	color: '#C4161C',
	border: '1px solid #C4161C',
	backgroundColor: 'white',
	'&:hover': {
		color: '#C4161C',
		border: '1px solid #C4161C',
		backgroundColor: 'white',
	},
	fontWeight: '500',
};

const validationSchema = yup.object({
	userName: yup.string().required('User Name is required'),
	fileName: yup.string().required('File Name is required'),
	password: yup.string().required('Password is required'),
	// frequency: yup.string().required('Frequency is required'),
	time: yup.string(),
	// noOfTime: yup.string().required('No of Time is required'),
});

const chooseFileBtnStyle = {
	backgroundColor: 'rgba(196, 22, 28, 1)',
	color: 'white',
	padding: '10px 25px 10px 25px',
	fontWeight: '500',
	fontSize: '0.5rem',
	borderRadius: '8px',
};

const SFTPIntegration = () => {
	const [data, setData] = useState({});
	const inputFileRef = useRef(null);
	const [nbfc_name, setNbfcName] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://52.66.247.118:30201/sftp_config/get_sftp_config/${nbfc_name}`,
				);
				const result = await response.json();
				setNbfcName('Sriram');
				setData(result);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [nbfc_name]);
	console.log(data);
	useEffect(() => {
		formik.setFieldValue('userName', data.user_name);
		formik.setFieldValue('fileName', data.file_name);
		formik.setFieldValue('password', data.password);
		formik.setFieldValue('time', data.scheduled_time_on_daily_basis);
	});
	const [excel, setExcel] = React.useState(null);
	const arr = [1, 2, 3, 4, 5];
	const formik = useFormik({
		initialValues: {
			userName: '',
			fileName: '',
			password: '',
			// frequency: '',
			time: '',
			// noOfTime: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log({ values });
		},
	});

	const handleDrop = (event) => {
		event.preventDefault();
		const droppedFile = event.dataTransfer.files[0];
		console.log({ droppedFile });
		setExcel(droppedFile);
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	const handleExcelSelect = (event) => {
		const file = event.target.files[0];
		console.log({ file });
	};

	return (
		<div>
			<div className="flex">
				<ProtocolIcon />
				&nbsp;&nbsp;
				<div className="secure-title">Secure File Transfer Protocol</div>
			</div>
			<div className="sftp-form-block">
				<form onSubmit={formik.handleSubmit}>
					<Grid container>
						<Grid item sm={6} className="pr-2">
							<InputComponent {...userNameAttributes(formik)} />
						</Grid>
						<Grid item sm={6} className="pr-2">
							<InputComponent {...fileNameAttributes(formik)} />
						</Grid>
						<Grid item sm={6} className="pr-2">
							<InputComponent {...passwordAttributes(formik)} />
						</Grid>
						<Grid item sm={6} className="pr-2">
							<InputComponent {...urlAttributes(formik)} />
							{/* <div
								className="input-label"
								style={{
									color: 'rgba(135, 148, 194, 1)',
									fontSize: '12px',
								}}
							>
								URL
							</div>
							<div className="url-link">sftp://user@hpe.com/a.txt</div> */}
						</Grid>
						{/* <Grid item sm={1.7} className="pr-05">
							<SelectComponent {...frequencyAttributes(formik)} />
						</Grid> */}
						<Grid item sm={4} className="pr-05">
							<SelectComponent {...timeAttributes(formik)} />
						</Grid>
						{/* <Grid item sm={1.3}>
							<InputComponent {...noOfTimeAttributes(formik)} />
						</Grid> */}
					</Grid>
				</form>
			</div>
			<Divider />
			<div className="title mt-2">Instant Upload File</div>
			<div className="mt-3">
				<div className="upload-txt">
					Upload File - Excel{' '}
					<span className="size-txt">
						&#40;Maximum file size 20MB&#41;
					</span>
				</div>
				<div onDrop={handleDrop} onDragOver={handleDragOver}>
					<div className="upload-field">
						<div className="flex drop-field">
							<LinkIcon />
							&nbsp;{' '}
							<span className="drag-txt">
								{' '}
								Drag and Drop files here
							</span>
							<input
								type="file"
								id="file"
								accept=".xlsx, .csv, .xls"
								ref={inputFileRef}
								style={{ display: 'none' }}
								onChange={(event) => handleExcelSelect(event)}
								key={excel ? 'file-selected' : 'no-file-selected'}
							/>
						</div>
						&nbsp;
						<div
							role="presentation"
							onClick={() => inputFileRef.current.click()}
						>
							<CustomButton customStyle={chooseFileBtnStyle}>
								Choose File
							</CustomButton>
						</div>
					</div>
				</div>
			</div>
			<div className="uploaded-file-list">
				{arr?.map((item, idx) => {
					return <UploadedFileComp key={idx} />;
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
					<CustomButton buttonDisabled={false} customStyle={backBtnStyle}>
						Back
					</CustomButton>
					&nbsp; &nbsp;&nbsp;
					<CustomButton
						buttonDisabled={false}
						customStyle={customButtonStyle}
					>
						Review &nbsp;
						<ArrowForwardIosIcon fontSize="11" />
					</CustomButton>
				</Grid>
			</Grid>
		</div>
	);
};

export default SFTPIntegration;
