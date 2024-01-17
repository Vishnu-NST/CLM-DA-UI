import { useFormik } from 'formik';
import * as yup from 'yup';
import { Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
	prodIPAttributes,
	prodPortAttributes,
	uatIPAttributes,
	uatPortAttributes,
} from './utils/apiFormAttributes';
import SwaggerIcon from '../../assets/svg/SwaggerIcon';
import CustomButton from '@/NBFC/components/CustomButton';
import InputComponent from '@/NBFC/components/InputComponent';

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

const validationSchema = yup.object({
	prodIP: yup.string().required('IP address is required'),
	prodPort: yup.string().required('Port is required'),
	uatIP: yup.string().required('IP address is required'),
	uatPort: yup.string().required('Port is required'),
});

const APIIntegration = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues: {
			prodIP: '',
			prodPort: '',
			uatIP: '',
			uatPort: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log({ values });
			onSubmit();
		},
	});

	return (
		<>
			<div className="flex">
				<SwaggerIcon />
				&nbsp; &nbsp;
				<div className="title">Swagger</div>
			</div>
			<form onSubmit={formik.handleSubmit}>
				<div className="tab-sub-title">Production</div>
				<div className="flex mb-1">
					<div className="swagger-title">Swagger Link&nbsp;</div>
					<div className="swagger-link">DA.Mifix.co.in</div>
				</div>
				<Grid container className="pr-5">
					<Grid item sm={6} className="pr-2">
						<InputComponent {...prodIPAttributes(formik)} />
					</Grid>
					<Grid item sm={6} className="pr-2">
						<InputComponent {...prodPortAttributes(formik)} />
					</Grid>
				</Grid>
				<div className="tab-sub-title">UAT</div>
				<div className="flex mb-1">
					<div className="swagger-title">Swagger Link&nbsp;</div>
					<div className="swagger-link">swagger.DA-UAT.mifix.co.in</div>
				</div>
				<Grid container className="pr-5">
					<Grid item sm={6} className="pr-2">
						<InputComponent {...uatIPAttributes(formik)} />
					</Grid>
					<Grid item sm={6} className="pr-2">
						<InputComponent {...uatPortAttributes(formik)} />
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
