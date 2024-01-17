import React from 'react';
import { Card, Typography } from '@mui/material';
import AssetClassStarIcon from '@/NBFC/assets/svg/AssetClassStarIcon';
import ForwardArrow from '@/NBFC/assets/svg/ForwardArrow';

const AssetClass = ({ productText, subText, linkText, linkText1, onClickLink }) => {
	return (
		<Card
			sx={{
				width: '18%',
				padding: '1rem',
				margin: '1rem',
				borderRadius: '0.8rem',
			}}
		>
			<div style={{ marginTop: '1rem' }}>
				<div
					style={{
						marginTop: '3px',
						background:
							'linear-gradient(180deg, rgba(196, 22, 28, 0.20) 0%, rgba(196, 22, 28, 0.00) 100%)',
						height: '17%',
						width: '25%',
						borderRadius: '10%',
					}}
				>
					<div>
						<AssetClassStarIcon />
					</div>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					marginTop: '1.5rem',
				}}
			>
				<Typography
					sx={{ color: '#8794C2', fontSize: '0.78rem', fontWeight: '600' }}
				>
					{productText}
				</Typography>
				<Typography
					sx={{ color: '#1B1B1B', fontSize: '0.78rem', fontWeight: '600' }}
				>
					{subText}
				</Typography>
			</div>
			<div>
				<Typography
					sx={{
						color: '#8794C2',
						fontSize: '0.6rem',
						marginTop: '0.7rem',
						marginBottom: '1rem',
					}}
				>
					{linkText}
				</Typography>
			</div>
			<hr style={{ borderTop: '1px solid rgba(135, 148, 194, 0.20)' }} />
			<div style={{ display: 'flex', cursor: 'pointer' }}>
				<div>
					<Typography
						sx={{
							color: '#C4161C',
							fontSize: '0.65rem',
							fontWeight: '500',
							marginTop: '0rem',
						}}
						onClick={onClickLink}
					>
						{linkText1}
					</Typography>
				</div>
				<div style={{ marginTop: '-0.1rem' }}>
					<ForwardArrow />
				</div>
			</div>
		</Card>
	);
};

export default AssetClass;
