/* eslint-disable no-unused-vars */
import { useFormik } from 'formik';
import ProtocolIcon from '../../../../assets/svg/ProtocolIcon';
import LinkIcon from '../../../../assets/svg/LinkIcon';
import TickIcon from '../../../../assets/svg/TickIcon';
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

const chooseFileBtnStyle = {
	backgroundColor: 'rgba(196, 22, 28, 1)',
	color: 'white',
	padding: '10px 25px 10px 25px',
	fontWeight: '500',
	fontSize: '0.5rem',
	borderRadius: '8px',
};

const SFTPIntegration = ({ sftpFormik, onFileUpload }) => {
	const inputFileRef = useRef(null);
	const [excel, setExcel] = React.useState(null);
	const [uploadedFile, setUploadedFile] = React.useState();

	const arr = [1, 2, 3, 4, 5];

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
		setUploadedFile(file);
		onFileUpload(file);
	};

	return (
		<div>
			<div className="flex">
				<ProtocolIcon />
				&nbsp;&nbsp;
				<div className="secure-title">Secure File Transfer Protocol</div>
			</div>
			<div className="sftp-form-block">
				<form onSubmit={sftpFormik.handleSubmit}>
					<Grid container>
						<Grid item sm={6} className="pr-2">
							<InputComponent {...userNameAttributes(sftpFormik)} />
						</Grid>
						<Grid item sm={6} className="pr-2">
							<InputComponent {...fileNameAttributes(sftpFormik)} />
						</Grid>
						<Grid item sm={6} className="pr-2">
							<InputComponent {...passwordAttributes(sftpFormik)} />
						</Grid>
						<Grid item sm={6} className="pr-2">
							<InputComponent {...urlAttributes(sftpFormik)} />
						</Grid>
						<Grid item sm={4} className="pr-05">
							<SelectComponent {...timeAttributes(sftpFormik)} />
						</Grid>
					</Grid>
					<Divider />
					<div className="title mt-2">Instant Upload File</div>
					<div
						className="mt-3"
						style={{
							display: 'flex',
							alignItems: 'flex-end',
						}}
					>
						<div>
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
											onChange={(event) =>
												handleExcelSelect(event)
											}
											key={
												excel
													? 'file-selected'
													: 'no-file-selected'
											}
										/>
									</div>
									&nbsp;
									<div
										role="presentation"
										onClick={() => inputFileRef.current.click()}
									>
										<CustomButton
											customStyle={chooseFileBtnStyle}
										>
											Choose File
										</CustomButton>
									</div>
								</div>
							</div>
						</div>
						{uploadedFile && (
							<div className="uploaded-txt">
								<TickIcon fill={'#00B85E'} />
								&nbsp; &nbsp;
								{uploadedFile?.name}
							</div>
						)}
					</div>
					{/* <div className="uploaded-file-list">
				{arr?.map((item, idx) => {
					return <UploadedFileComp key={idx} />;
				})}
			</div> */}
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
								customStyle={backBtnStyle}
							>
								Back
							</CustomButton>
							&nbsp; &nbsp;&nbsp;
							<CustomButton
								buttonDisabled={false}
								customStyle={customButtonStyle}
								type="submit"
							>
								Next &nbsp;
								<ArrowForwardIosIcon fontSize="11" />
							</CustomButton>
						</Grid>
					</Grid>
				</form>
			</div>
		</div>
	);
};

export default SFTPIntegration;
