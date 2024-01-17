import React from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import DeleteIcon from '../assets/svg/DeleteIcon';
import EditIcon from '../assets/svg/EditIcon';

const ReusableUserCard = ({
	status,
	onEdit,
	onDelete,
	cardIcon,
	name,
	username,
	role,
	roleType,
	onResendInvite,
	resendInviteText,
	forwardArrowIcon,
}) => {
	return (
		<Grid
			item
			sm={3}
			sx={{
				borderRadius: '15px',
				border: '1px solid #8794C2',
				margin: '2rem',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '0.8rem',
				}}
			>
				<div style={{ padding: '0.3rem', display: 'flex', flexFlow: 'row' }}>
					<div
						style={{
							marginTop: '3px',
							background: status === 'online' ? 'green' : '#8794C2',
							height: '8px',
							width: '8px',
							borderRadius: '50%',
						}}
					></div>
					<Typography
						sx={{
							fontSize: '0.65rem',
							marginLeft: '2px',
							color: status === 'online' ? 'green' : '#8794C2',
						}}
					>
						{status === 'online' ? 'Online' : 'Offline'}
					</Typography>
				</div>

				<div style={{ display: 'flex' }}>
					<div
						style={{ padding: '0.3rem', cursor: 'pointer' }}
						onClick={onEdit}
					>
						<EditIcon />
					</div>
					<div
						style={{ padding: '0.3rem', cursor: 'pointer' }}
						onClick={onDelete}
					>
						<DeleteIcon />
					</div>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					padding: '0 1rem 1rem',
					justifyContent: 'space-evenly',
				}}
			>
				<div
					style={{
						borderRadius: '50%',
						height: '4rem',
						width: '4rem',
						textAlign: 'center',
						background: '#8794C2',
						marginTop: '1rem',
					}}
				>
					<div style={{ marginTop: '1rem' }}>{cardIcon}</div>
				</div>
				<div>
					<div>
						<div>
							<Typography sx={{ fontSize: '0.8rem' }}>
								<b>{name}</b>
							</Typography>
						</div>
						<div>
							<Typography
								sx={{
									color: '#8794C2',
									fontSize: '0.8rem',
									marginTop: '0.4rem',
								}}
							>
								{username}
							</Typography>
						</div>
					</div>
					<hr
						style={{ borderTop: '1px solid rgba(135, 148, 194, 0.20)' }}
					/>
					<div>
						<div>
							<Typography sx={{ fontSize: '0.8rem' }}>
								<b>{role}</b>
							</Typography>
						</div>
						<div>
							<Typography
								sx={{ color: '#8794C2', fontSize: '0.7rem' }}
							>
								{roleType}
							</Typography>
						</div>
					</div>
					<div style={{ display: 'flex', cursor: 'pointer' }}>
						<div>
							<Typography
								sx={{
									color: '#C4161C',
									fontSize: '0.7rem',
									fontWeight: '600',
								}}
								onClick={onResendInvite}
							>
								{resendInviteText}
							</Typography>
						</div>
						<div>{forwardArrowIcon}</div>
					</div>
				</div>
			</div>
		</Grid>
	);
};

export default ReusableUserCard;
