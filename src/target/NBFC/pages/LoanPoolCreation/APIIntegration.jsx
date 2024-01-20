import { Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
	prodIPAttributes,
	prodPortAttributes,
	uatIPAttributes,
	uatPortAttributes,
} from './utils/apiFormAttributes';
import SwaggerIcon from '../../../../assets/svg/SwaggerIcon';
import CustomButton from '@/components/CustomButton';
import InputComponent from '@/components/InputComponent';

const customButtonStyle = {
	borderRadius: '7px',
	padding: '0.5rem 2.5rem',
	color: '#FFFFFF',
	backgroundColor: '#C4161C',
	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
	},
	fontWeight: '500',
};

const APIIntegration = ({ apiFormik }) => {
	return (
		<>
			<div className="flex">
				<SwaggerIcon />
				&nbsp; &nbsp;
				<div className="title">Swagger</div>
			</div>
			<form onSubmit={apiFormik.handleSubmit}>
				<div className="tab-sub-title">Production</div>
				<div className="flex mb-1">
					<div className="swagger-title">Swagger Link&nbsp;</div>
					<div className="swagger-link">
						{apiFormik.initialValues.api_prod_swagger_link}
					</div>
				</div>
				<Grid container className="pr-5">
					<Grid item sm={6} className="pr-2">
						<InputComponent {...prodIPAttributes(apiFormik)} />
					</Grid>
					<Grid item sm={6} className="pr-2">
						<InputComponent {...prodPortAttributes(apiFormik)} />
					</Grid>
				</Grid>
				<div className="tab-sub-title">UAT</div>
				<div className="flex mb-1">
					<div className="swagger-title">Swagger Link&nbsp;</div>
					<div className="swagger-link">
						{apiFormik.initialValues.api_uat_swagger_link}
					</div>
				</div>
				<Grid container className="pr-5">
					<Grid item sm={6} className="pr-2">
						<InputComponent {...uatIPAttributes(apiFormik)} />
					</Grid>
					<Grid item sm={6} className="pr-2">
						<InputComponent {...uatPortAttributes(apiFormik)} />
					</Grid>
				</Grid>
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
							buttonType={'submit'}
							buttonDisabled={false}
							customStyle={customButtonStyle}
						>
							Connect &nbsp;
							<ArrowForwardIosIcon fontSize="11" />
						</CustomButton>
					</Grid>
				</Grid>
			</form>
		</>
	);
};

export default APIIntegration;
