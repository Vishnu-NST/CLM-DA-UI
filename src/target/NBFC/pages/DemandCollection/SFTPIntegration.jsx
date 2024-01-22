/* eslint-disable no-unused-vars */
import { useFormik } from 'formik';
import ProtocolIcon from '../../../../assets/svg/ProtocolIcon';
import LinkIcon from '../../../../assets/svg/LinkIcon';
import * as yup from 'yup';
import { Divider, Grid } from '@mui/material';
import React, { useRef } from 'react';
import CustomButton from '@/components/CustomButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
	fileNameAttributes,
	frequencyAttributes,
	noOfTimeAttributes,
	passwordAttributes,
	poolSelectionAttributes,
	timeAttributes,
	urlAttributes,
	userNameAttributes,
} from './utils/sftpFormAttributes';
import UploadedFileComp from './components/UploadedFileComp';
import InputComponent from '@/components/InputComponent';
import SelectComponent from '@/components/SelectComponent';
import useDemandUpload from '@/store/useDemandUpload';
import useCollectionUpload from '@/store/useCollectionUpload';
import useDemandUploadHistory from '@/store/useDemandUploadHistory';
import { useAppState } from '@/store/useAppState';

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
	url: yup.string().required('Url is required'),
	pool: yup.string().required('Pool is required'),
	time: yup.string(),
});

const chooseFileBtnStyle = {
	backgroundColor: 'rgba(196, 22, 28, 1)',
	color: 'white',
	padding: '10px 25px 10px 25px',
	fontWeight: '500',
	fontSize: '0.5rem',
	borderRadius: '8px',
};

const SFTPIntegration = ({ tabValue }) => {
	const inputFileRef = useRef(null);
	const [excel, setExcel] = React.useState(null);
	const demandUpload = useDemandUpload();
	const collectionUpload = useCollectionUpload();
	const arr = [1, 2, 3, 4, 5];
	const uploadHistory = useDemandUploadHistory(tabValue?.toLowerCase());
	const { app } = useAppState();
	const formik = useFormik({
		initialValues: {
			userName: '',
			fileName: '',
			url: '',
			password: '',
			time: '',
			pool: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log({ values });
		},
	});

	const handleDrop = (event) => {
		event.preventDefault();
		const droppedFile = event.dataTransfer.files[0];
		setExcel(droppedFile);
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	const handleExcelSelect = async (event) => {
		const file = event.target.files[0];
		if (tabValue === 'Demand') {
			demandUpload.mutate(file);
		} else if (tabValue === 'Collection') {
			collectionUpload.mutate(file);
		}
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
						</Grid>
						<Grid item sm={6} className="pr-2">
							<SelectComponent {...poolSelectionAttributes(formik)} />
						</Grid>
						<Grid item sm={6} className="pr-2">
							<SelectComponent {...timeAttributes(formik)} />
						</Grid>
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
							<form encType="multipart/form-data">
								<input
									name="excel"
									type="file"
									id="file"
									accept=".xlsx, .csv, .xls"
									ref={inputFileRef}
									style={{ display: 'none' }}
									onChange={(event) => handleExcelSelect(event)}
									key={
										excel ? 'file-selected' : 'no-file-selected'
									}
								/>
							</form>
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
				{uploadHistory?.data?.data?.map((item, idx) => {
					return <UploadedFileComp key={idx} uploadData={item} />;
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
