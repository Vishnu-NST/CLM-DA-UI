import { Checkbox, Grid } from '@mui/material';
import ExcelIcon from '@/assets/svg/ExcelIcon.png';
import CustomButton from '@/components/CustomButton';
import DeleteImg from '@/assets/svg/DeleteImg';
import { getOrdinal } from '@/utils/common';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const btnStyle = {
	borderRadius: '7px',
	padding: '0.5rem 1rem',
	color: '#FFFFFF',
	backgroundColor: '#C4161C',
	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
	},
	fontWeight: '500',
	fontSize: '0.7rem',
};

const UploadedFileComp = ({ uploadData }) => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	const getReportingDate = (dateString) => {
		const dateObject = new Date(dateString);
		const options = {
			year: 'numeric',
			month: 'long',
		};
		const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
			dateObject,
		);
		const ordinalDay = getOrdinal(dateObject.getDate());
		const result = `${ordinalDay} ${formattedDate}`;
		return result;
	};

	const getUploadedTime = (dateTimeString) => {
		const dateTimeObject = new Date(dateTimeString);

		const options = {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		};

		const formattedTime = new Intl.DateTimeFormat('en-US', options).format(
			dateTimeObject,
		);

		return formattedTime;
	};

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = uploadData?.downloadURL;
		link.download = `${uploadData?.fileName}.xlsx`;
		link.target = '_blank';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="file-detail">
			<Grid container>
				<Grid item sm={0.5} className="flex">
					<Checkbox
						size="small"
						{...label}
						sx={{
							'&.MuiCheckbox-root.Mui-checked': {
								color: '#C4161C',
							},
						}}
					/>
				</Grid>
				<Grid item sm={3} className="flex">
					<img src={ExcelIcon} alt="" />
					&nbsp; &nbsp;
					<div>
						<div className="title">{uploadData?.fileName}.xlsx</div>
						<div className="sub-title">
							Reporting on{' '}
							{getReportingDate(uploadData?.reportingDate)}
						</div>
					</div>
				</Grid>
				<Grid item sm={1}>
					<div className="title">{uploadData?.aum}cr</div>
					<div className="sub-title">AUM</div>
				</Grid>
				<Grid item sm={1.5}>
					<div className="title">{uploadData?.uploadedBy}</div>
					<div className="sub-title">Uploaded by</div>
				</Grid>
				<Grid item sm={1.5}>
					<div className="title">
						{getReportingDate(uploadData?.uploadedAt)}
					</div>
					<div className="sub-title">Uploaded Date</div>
				</Grid>
				<Grid item sm={1}>
					<div className="title">
						{getUploadedTime(uploadData?.uploadedAt)}
					</div>
					<div className="sub-title">Uploaded Time</div>
				</Grid>
				{/* <Grid item sm={1.5}>
					<CustomButton customStyle={btnStyle}>Rejected</CustomButton>
				</Grid> */}
				<Grid item sm={2.5}>
					<div className="flex-between">
						&nbsp;
						{/* <div>
							<div className="status-title">Oops... Upload Failed</div>
							<div className="status-sub-title">
								Please Re-Upload file
							</div>
						</div> */}
						<CustomButton
							buttonDisabled={false}
							customStyle={btnStyle}
							onClick={handleDownload}
						>
							Download &nbsp;
							<ArrowForwardIosIcon fontSize="11" />
						</CustomButton>{' '}
						<div>
							<DeleteImg />
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default UploadedFileComp;
