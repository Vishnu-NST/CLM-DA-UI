import * as React from 'react';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckIcon from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Typography from '@mui/material/Typography';

const ColorlibConnector = styled(StepConnector)(({ theme, status }) => ({
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
}));

const ColorlibStepIconRoot = styled('div')(
	({ theme, status, active, completed }) => ({
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
			backgroundColor: status === 'rejected' ? '#C4161C' : '#F78736',
			boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
		}),
		...(completed && {
			backgroundColor: status === 'rejected' ? '#C4161C' : '#00B85E',
		}),
	}),
);

function ColorlibStepIcon(props) {
	const { completed, className, active, ...otherProps } = props;

	return (
		<ColorlibStepIconRoot
			active={active}
			completed={completed}
			className={className}
			{...otherProps}
		>
			{completed ? <CheckIcon style={{ fontSize: '16px' }} /> : null}
		</ColorlibStepIconRoot>
	);
}

export default function BDDStepper({ status }) {
	const [activeStep, setActiveStep] = React.useState(0);

	const steps = [
		'Due Diligence Completed',
		'Pool Approved',
		'Transaction Done',
		'Pool Received',
	];

	React.useEffect(() => {
		if (status === 'approved') {
			setActiveStep(1);
		} else if (status === 'rejected') {
			setActiveStep(2);
		} else if (status === 'processing') {
			setActiveStep(3);
		} else if (status === 'completed') {
			setActiveStep(4);
		} else {
			setActiveStep(0);
		}
	}, [status]);

	return (
		<Stack sx={{ width: '100%' }} spacing={4}>
			<Stepper
				alternativeLabel
				activeStep={activeStep}
				connector={<ColorlibConnector status={activeStep} />}
			>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel
							StepIconComponent={(stepProps) => (
								<ColorlibStepIcon
									{...stepProps}
									status={activeStep}
								/>
							)}
						>
							<Typography style={{ fontSize: '0.875rem' }}>
								{label}
							</Typography>
						</StepLabel>
					</Step>
				))}
			</Stepper>
		</Stack>
	);
}
