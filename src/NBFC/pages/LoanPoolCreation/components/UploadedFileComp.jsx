import { Checkbox, Grid } from '@mui/material';
import ExcelIcon from '../../../assets/svg/ExcelIcon.png';
import CustomButton from '../../../components/CustomButton';
import DeleteImg from '../../../assets/svg/DeleteImg';

const btnStyle = {
	background:
		'linear-gradient(to bottom,rgba(196, 22, 28, 0.1),rgba(196, 22, 28, 0))',
	borderRadius: '30px',
	color: '#C4161C',
};

const UploadedFileComp = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
				<Grid item sm={2} className="flex">
					<img src={ExcelIcon} alt="" />
					&nbsp; &nbsp;
					<div>
						<div className="title">TitleExcelFile 1.xlsx</div>
						<div className="sub-title">Reporting on 16th april 2023</div>
					</div>
				</Grid>
				<Grid item sm={1}>
					<div className="title">10cr</div>
					<div className="sub-title">AUM</div>
				</Grid>
				<Grid item sm={1.5}>
					<div className="title">Midhun S</div>
					<div className="sub-title">Uploaded by</div>
				</Grid>
				<Grid item sm={1.5}>
					<div className="title">16th april 2023</div>
					<div className="sub-title">Uploaded Date</div>
				</Grid>
				<Grid item sm={1}>
					<div className="title">11:00 Am</div>
					<div className="sub-title">Uploaded Time</div>
				</Grid>
				<Grid item sm={1.5}>
					<CustomButton customStyle={btnStyle}>Rejected</CustomButton>
				</Grid>
				<Grid item sm={2.5}>
					<div className="flex-between">
						&nbsp;
						<div>
							<div className="status-title">Oops... Upload Failed</div>
							<div className="status-sub-title">
								Please Re-Upload file
							</div>
						</div>
						{/* <CustomButton customStyle={btnStyle}>Rejected</CustomButton> */}
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
