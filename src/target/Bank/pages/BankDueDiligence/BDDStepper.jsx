import * as React from 'react';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckIcon from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ColorlibConnector = styled(StepConnector)(({ theme, status }) => {
	return {
		[`&.${stepConnectorClasses.alternativeLabel}`]: {
			top: 9,
		},
		[`&.${stepConnectorClasses.active}`]: {
			[`& .${stepConnectorClasses.line}`]: {
				backgroundColor: status === 'rejected' ? '#C4161C' : '#F78736',
			},
		},
		[`&.${stepConnectorClasses.completed}`]: {
			[`& .${stepConnectorClasses.line}`]: {
				backgroundColor: status === 'rejected' ? '#C4161C' : '#00B85E',
			},
		},
		[`& .${stepConnectorClasses.line}`]: {
			height: 3,
			border: 0,
			backgroundColor:
				theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
			borderRadius: 1,
		},
	};
});

const ColorlibStepIconRoot = styled('div')(
	({ theme, status, active, completed, dd, pool, transaction, handedOver }) => ({
		backgroundColor:
			theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
		zIndex: 1,
		color: '#fff',
		width: 20,
		height: 20,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		...(active && {
			backgroundColor:
				dd === 'Due Diligence rejected' ||
				pool === 'Pool rejected' ||
				transaction === 'Transaction rejected' ||
				handedOver === 'rejected'
					? '#C4161C'
					: '#F78736',
			boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
		}),
		...(completed && {
			backgroundColor: status === 'rejected' ? '#C4161C' : '#00B85E',
		}),
	}),
);

function ColorlibStepIcon(props) {
	const {
		completed,
		className,
		active,
		dd,
		pool,
		transaction,
		handedOver,
		...otherProps
	} = props;

	return (
		<ColorlibStepIconRoot
			active={active}
			completed={completed}
			className={className}
			dd={dd}
			pool={pool}
			transaction={transaction}
			handedOver={handedOver}
			{...otherProps}
		>
			{completed ? <CheckIcon style={{ fontSize: '16px' }} /> : null}
		</ColorlibStepIconRoot>
	);
}

function BDDStepper({ dd, pool, transaction, handedOver, poolId }) {
	const [activeStep, setActiveStep] = React.useState(0);

	const navigate = useNavigate();

	const handleCustomerDetailsClick = () => {
		navigate(`/bank/panel/CustomerVerification/${poolId}`);
	};

	const statusArray = [dd, pool, transaction, handedOver];

	const step = {
		completed: [
			'Due Diligence completed',
			'Pool Approved',
			'Loan ID',
			'Pool Received',
		],
		pending: [
			'Complete Due Diligence',
			'Complete Pool Approval',
			'Complete Loan ID',
			'Pool Approval Pending',
		],
		rejected: [
			'Due Diligence Rejected',
			'Pool Rejected',
			'Loan ID Rejected',
			'Pool Rejected',
		],
		default: ['Complete Due Diligence', 'Pool', 'Loan ID', 'Pending'],
	};

	const resultantArray = statusArray.map((ele, index) => {
		if (!ele || ele.trim() === '') {
			return step.default[index];
		}

		const data = ele.trim().split(/\s+/);
		const res = data.length > 0 ? data.pop().toLowerCase() : '';
		const toSearchIn = step[res];
		return toSearchIn ? toSearchIn[index] : '';
	});
	React.useEffect(() => {
		if (
			dd === 'Due Diligence completed' &&
			pool === 'Pool completed' &&
			transaction === 'Transaction completed' &&
			handedOver === 'completed'
		) {
			setActiveStep(4);
		} else if (
			dd === 'Due Diligence completed' &&
			pool === 'Pool completed' &&
			transaction === 'Transaction completed'
		) {
			setActiveStep(3);
		} else if (dd === 'Due Diligence completed' && pool === 'Pool completed') {
			setActiveStep(2);
		} else if (dd === 'Due Diligence completed') {
			setActiveStep(1);
		} else {
			setActiveStep(0);
		}
	}, [dd, pool, transaction, handedOver]);
	const StyledTypography = styled(Typography)`
		font-size: 0.875rem;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	`;

	return (
		<Stack sx={{ width: '100%' }} spacing={4}>
			<Stepper
				alternativeLabel
				activeStep={activeStep}
				connector={<ColorlibConnector status={activeStep} />}
			>
				{resultantArray.map((label) => (
					<Step key={label}>
						<StepLabel
							StepIconComponent={(stepProps) => (
								<ColorlibStepIcon
									{...stepProps}
									status={activeStep}
									dd={dd}
									pool={pool}
									transaction={transaction}
									handedOver={handedOver}
								/>
							)}
						>
							{label === 'Complete Due Diligence' ||
							label === 'Complete Pool Approval' ||
							label === 'Complete Loan ID' ? (
								<StyledTypography
									onClick={handleCustomerDetailsClick}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									{label}{' '}
									<KeyboardArrowRightIcon fontSize="small" />
								</StyledTypography>
							) : (
								<Typography style={{ fontSize: '0.875rem' }}>
									{label}
								</Typography>
							)}
						</StepLabel>
					</Step>
				))}
			</Stepper>
		</Stack>
	);
}
export default BDDStepper;
