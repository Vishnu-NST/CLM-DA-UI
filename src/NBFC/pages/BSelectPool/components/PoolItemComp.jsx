import { Checkbox, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import SignalIcon from '../../../assets/svg/SignalIcon';
import React from 'react';
import UnLock from '../../../assets/svg/UnLock';
import Lock from '../../../assets/svg/Lock';
import CustomButton from '@/NBFC/components/CustomButton';

const daysLeftBtnStyle = {
	borderRadius: '30px',
	padding: '10px 15px 10px 15px',
	background:
		'linear-gradient(to bottom,rgba(247, 135, 54, 0.2),rgba(247, 135, 54, 0))',
	fontSize: '0.75rem',
	color: '#F78736',
	width: 'fit-content',
};

const graphToggleButton = {
	fontSize: '0.6rem',
	height: '1.5rem',
	fontWeight: '600',
	textTransform: 'capitalize',
	borderRadius: '25px',
	border: 'none',
	boxShadow: 'none !important',
	padding: '6px 10px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const PoolItemComp = ({ poolData, idx }) => {
	const [alignment, setAlignment] = React.useState('unLock');

	const handleChange = (event, newAlignment) => {
		if (newAlignment != null) {
			setAlignment(newAlignment);
		}
	};

	console.log({ alignment });
	return (
		<div
			className="pool-card"
			style={{
				backgroundColor: idx % 2 === 0 ? 'white' : 'transparent',
			}}
		>
			<Grid container className="pool-item">
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
				<Grid item sm={2}>
					<div className="title">{poolData?.poolName}</div>
					<div className="sub-title">Added on {poolData?.addedDate}</div>
				</Grid>
				<Grid item sm={1.5}>
					<div className="nbfc-logo">NBFC LOGO</div>
				</Grid>
				<Grid item sm={0.8}>
					<div className="title">₹ &nbsp;{poolData?.aumValue}</div>
					<div className="sub-title">AUM</div>
				</Grid>
				<Grid item sm={1}>
					<div className="title">{poolData?.creditRatings}</div>
					<div className="sub-title">Credit Ratings</div>
				</Grid>
				<Grid item sm={1}>
					<div className="title">{poolData?.averageIRR}</div>
					<div className="sub-title">Average IRR</div>
				</Grid>
				<Grid item sm={1.4}>
					<CustomButton customStyle={daysLeftBtnStyle}>
						{poolData?.daysLeft} days left
					</CustomButton>
				</Grid>
				<Grid item sm={1.8} className="flex">
					<div className="customer-detail-txt">
						Customer Details <KeyboardArrowRightOutlinedIcon />
					</div>
				</Grid>
				<Grid item sm={1.5}>
					<ToggleButtonGroup
						className="toggle-button"
						value={alignment}
						exclusive
						onChange={handleChange}
						aria-label="Platform"
						sx={{
							textTransform: 'none',
							width: 'fit-content',
							borderRadius: '25px',
							borderColour: '#FFFFFF',
							backgroundColor: 'white',
							border: '1px solid rgba(135, 148, 194, 0.2)',
							color: '#8794C2',
							fontSize: '0.875rem',
							'& .MuiToggleButtonGroup-grouped.Mui-selected': {
								color: 'white',
								backgroundColor: '#C4161C',
							},
						}}
					>
						<ToggleButton style={graphToggleButton} value="unLock">
							<UnLock
								fill={alignment === 'unLock' ? 'white' : '#8794C2'}
							/>
							&nbsp;
							<span>Unlock</span>
						</ToggleButton>
						<ToggleButton style={graphToggleButton} value="lock">
							<Lock
								fill={alignment === 'lock' ? 'white' : '#8794C2'}
							/>
							&nbsp;
							<span>Lock</span>
						</ToggleButton>
					</ToggleButtonGroup>
				</Grid>
				<Grid item sm={0.5} className="signal-icon">
					<SignalIcon fill={'#00B85E'} />
				</Grid>
			</Grid>
		</div>
	);
};

export default PoolItemComp;
