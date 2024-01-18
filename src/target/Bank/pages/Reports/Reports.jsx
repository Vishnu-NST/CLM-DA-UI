import DatePickerComponent from '@/components/DatePickerComponent';
import HeaderComp from '@/components/HeaderComponent';
import SelectComponent from '@/components/SelectComponent';
import {
	fromDateAttributes,
	poolNameAttributes,
	toDateAttributes,
} from '@/target/NBFC/pages/LoanPoolCreation/utils/formAttributes';
import { FormControl, Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ReportTypeCard from './components/ReportTypeCard';
import CustomButton from '@/components/CustomButton';

export default function BankReports() {
	const validationSchema = yup.object({
		poolName: yup.string().required('Pool Name is required'),
		fromDate: yup.string().required('From Date is required'),
		toDate: yup.string().required('To Date is required'),
	});

	const formik = useFormik({
		initialValues: {
			poolName: '',
			fromDate: null,
			toDate: null,
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log({ values });
			setShowForm(false);
			setShowDataIntegration(true);
		},
	});

	const styles = {
		block: {
			padding: '1.5rem',
			backgroundColor: 'white',
			border: '1px solid rgba(135, 148, 194, 0.2)',
			borderRadius: '1.25rem',
		},
		header: {
			fontFamily: 'Poppins, sans-serif',
			fontSize: '1.375rem',
			fontWeight: 600,
			color: '#1B1B1B',
		},
	};
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
	return (
		<>
			<HeaderComp title={'Reports'} />
			<div style={{ margin: '1rem' }}>
				<div style={styles.block}>
					<Typography sx={styles.header}>Generate Reports</Typography>
					<br />
					<div style={{ width: '35%' }}>
						<SelectComponent {...poolNameAttributes(formik)} />
					</div>
					{/* <br /> */}
					<Grid container spacing={0.5}>
						<Grid item xs={3.5}>
							<DatePickerComponent {...fromDateAttributes(formik)} />
						</Grid>
						<Grid item xs={0.25} />
						<Grid item xs={3.5}>
							<DatePickerComponent {...toDateAttributes(formik)} />
						</Grid>
					</Grid>
					{/* <br />   */}
					<Typography
						sx={{
							fontFamily: 'Poppins, sans-serif',
							fontSize: '0.75rem',
							fontWeight: 400,
							color: '#8794C2',
							mb: 3,
						}}
					>
						Choose Report Type
					</Typography>
					<ReportTypeCard />
					<br />
					<div style={{ width: '25%' }}>
						<CustomButton
							buttonType={'submit'}
							buttonDisabled={false}
							customStyle={customButtonStyle}
						>
							Download Report
						</CustomButton>
					</div>
				</div>
			</div>
		</>
	);
}
