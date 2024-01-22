import React, { useRef } from 'react';
import TimerIcon from '../../../../assets/svg/TimerIcon';
import CloseIcon from '../../../../assets/svg/CloseIcon';
import { Divider } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import BankNameLogo from '@/assets/svg/BankNameLogo';
import NBFCNameLogo from '@/assets/svg/NBFCNameLogo';
import ExcelIcon from '@/assets/svg/ExcelIcon.png';
import DownloadIcon from '@/assets/svg/DownloadIcon';
import MsgTextIcon from '@/assets/svg/MsgTextIcon';
import DirectSendIcon from '@/assets/svg/DirectSendIcon';
import CustomButton from '@/components/CustomButton';
import MultilineInputComponent from '@/components/MultilineInputComponent';
import { capitalize } from 'lodash';
import { changeDateFormatForDd } from '@/utils/common';
import useGetQueryDetail from '@/store/useGetQueryDetail';
import useDdQueryFileUpload from '@/store/useQueryUpload';

const btnStyle = {
	border: '1px solid rgba(135, 148, 194, 0.2)',
	backgroundColor: 'white',
	borderRadius: '5px',
	color: '#8794C2',
	fontWeight: 400,
	fontSize: '0.875rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-evenly',
};

const chooseFileBtnStyle = {
	marginTop: '0.5rem',
	border: '1px solid #C4161C',
	backgroundColor: 'white',
	color: '#C4161C',
};

const uploadBtnStyle = {
	// width: '90%',
	borderRadius: '7px',
	padding: '0.5rem 2.5rem',
	color: '#FFFFFF',
	fontSize: '0.5rem',
	backgroundColor: '#C4161C',
	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
	},
	fontWeight: '500',
};

const DueDiligenceDrawer = ({ queryData, onClose }) => {
	const [isUploadField, setIsUploadField] = React.useState(false);
	const inputFileRef = useRef(null);
	const [excel, setExcel] = React.useState(null);
	const [comments, setComments] = React.useState();
	const [isReply, setIsReply] = React.useState(false);
	const queryDetail = useGetQueryDetail(queryData?.query_id);
	const uploadDdFile = useDdQueryFileUpload();

	const commentAttributes = {
		id: 'description',
		name: 'description',
		// label: (
		//   <p className="input-label">
		// 	Description<span style={{ color: "red" }}>*</span>
		//   </p>
		// ),
		placeholder: 'Write Something...',
		type: 'text',
		value: comments,
		onChange: (event) => setComments(event.target.value),
		disabled: false,
		multiline: true,
		rows: 4,
	};

	const handleExcelSelect = (event) => {
		const file = event.target.files[0];
		setExcel(file);
	};

	const getChatSendName = (qData) => {
		if (qData?.sender_id === qData?.nbfc_id) {
			return {
				icon: <NBFCNameLogo />,
				name: qData?.nbfc_name,
			};
		} else if (qData?.sender_id === qData?.bank_id) {
			return {
				icon: <BankNameLogo />,
				name: qData?.bank_name,
			};
		} else {
			return {
				icon: <BankNameLogo />,
				name: 'Bank name',
			};
		}
	};

	const handleDownload = (fileUrl) => {
		const link = document.createElement('a');
		link.href = fileUrl;
		link.download = 'filename.txt';
		link.target = '_blank';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleUpload = () => {
		uploadDdFile.mutate({ file: excel, query_id: queryData?.query_id });
		onClose();
	};

	return (
		<>
			<div className="drawer-header">
				<div className="flex-start">
					<TimerIcon />
					<div className="ml-1 flex-column-start">
						<div className="flex">
							<div className="title">
								{queryData?.pooldata?.pool_name}
							</div>
							<div
								className="tag"
								style={{
									background: 'rgba(135, 148, 194, 0.2)',
									color: 'rgba(135, 148, 194, 1)',
								}}
							>
								1 pool
							</div>
							&nbsp; &nbsp; &nbsp;
							<div
								className="tag"
								style={{
									background:
										'linear-gradient(to bottom,rgba(0, 184, 94, 0.1),rgba(0, 184, 94, 0))',
									color: '#00B85E',
								}}
							>
								{capitalize(queryData?.data?.status)}
							</div>
						</div>
						<div className="sub-title">
							Raised on{' '}
							{changeDateFormatForDd(
								new Date(queryData?.data?.created_at),
							)}
						</div>
					</div>
				</div>
				<div
					className="flex"
					style={{
						cursor: 'pointer',
					}}
					onClick={onClose}
				>
					<CloseIcon width={20} height={20} />
				</div>
			</div>
			<Divider />
			<Timeline
				className="timeline-container"
				sx={{
					display: 'flex',
					alignItems: 'flex-start',
					'.MuiTimelineItem-root::before': {
						flex: '0 !important',
					},
					'.MuiTimelineConnector-root': {
						width: '1px',
						backgroundColor: 'rgba(135, 148, 194, 0.2)',
					},
				}}
			>
				{queryDetail?.data?.map((item, idx) => {
					return (
						<TimelineItem key={idx}>
							<TimelineSeparator>
								<div className="logo-block">
									{getChatSendName(item)?.icon}
								</div>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<div className="title">
									{getChatSendName(item)?.name}
								</div>
								<div className="sub-title">{item?.action}</div>
								<div className="time">
									{changeDateFormatForDd(
										new Date(item?.created_at),
									)}
								</div>
								<div className="box-content">{item?.message}</div>
								<div className="excel-download-block">
									<div className="flex">
										<div className="">
											<img src={ExcelIcon} alt="" />
										</div>
										<div className="ml-1">
											<div className="title">
												DocsRequired.xlsx
											</div>
											<div className="sub-title">120KB</div>
										</div>
									</div>
									<div
										onClick={() => handleDownload(item?.fileurl)}
										style={{
											cursor: 'pointer',
										}}
									>
										<DownloadIcon />
									</div>
								</div>
							</TimelineContent>
						</TimelineItem>
					);
				})}
				<TimelineItem>
					<TimelineSeparator>
						<div className="logo-block">
							<BankNameLogo />
						</div>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<div className="title">NBFC Name</div>
						<div className="sub-title">
							Please choose an action to perform
						</div>
						<div className="upload-block">
							<CustomButton
								customStyle={btnStyle}
								onClick={() => {
									setIsReply(false);
									setIsUploadField(true);
								}}
							>
								<DirectSendIcon /> &nbsp; Upload Documents
							</CustomButton>
							&nbsp;
							<CustomButton
								customStyle={btnStyle}
								onClick={() => {
									setIsUploadField(false);
									setIsReply(true);
								}}
							>
								<MsgTextIcon /> &nbsp; Write a reply to bank
							</CustomButton>
						</div>
						{isUploadField && !excel && (
							<div className="upload-block">
								<div className="title">
									Upload File - Excel, PDF, PNG, JPG, Zip
								</div>
								<input
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
								<div
									role="presentation"
									onClick={() => inputFileRef.current.click()}
								>
									<CustomButton customStyle={chooseFileBtnStyle}>
										Choose File
									</CustomButton>
								</div>
							</div>
						)}
						{excel && (
							<div className="uploaded-box">
								<div className="title">
									Upload Documents / Attach Information
								</div>
								<div className="uploaded-content">
									<div className="flex">
										<div>
											<img src={ExcelIcon} alt="" />
										</div>
										&nbsp; &nbsp;
										<div>
											<div className="title">
												{excel?.name}
											</div>
											<div className="sub-title">
												{excel?.size}KB
											</div>
										</div>
									</div>
									<CloseIcon
										style={{
											cursor: 'pointer',
										}}
									/>
								</div>
								<div className="mt-1">
									<MultilineInputComponent
										bgColor="#F8F9FB"
										{...commentAttributes}
									/>
								</div>
								<div className="mt-1 flex-end">
									<CustomButton
										customStyle={uploadBtnStyle}
										className="flex-end"
										onClick={handleUpload}
									>
										Upload Documents
									</CustomButton>
								</div>
							</div>
						)}
						{isReply && (
							<div className="mt-1">
								<div className="reply-title">
									Write a reply to bank
								</div>
								<div className="mt-1">
									<MultilineInputComponent
										bgColor="#F8F9FB"
										{...commentAttributes}
									/>
								</div>
								<div className="mt-1 flex-end">
									<CustomButton
										customStyle={uploadBtnStyle}
										className="flex-end"
									>
										Send message
									</CustomButton>
								</div>
							</div>
						)}
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</>
	);
};

export default DueDiligenceDrawer;
