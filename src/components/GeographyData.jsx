import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
const GeographyData = () => {
	return (
		<Grid spacing={2} minHeight="100%">
			<Typography
				variant="h6"
				style={{
					padding: '1rem',
					fontSize: '1.125rem',
					fontWeight: '600',
				}}
			>
				Geography
			</Typography>
			<Divider />
			<Box
				sx={{
					width: '90%',
					marginLeft: '2rem',
					marginTop: '6rem',
					height: '0.8rem',
					borderRadius: '50px',
					backgroundColor: '#F8F9FB ',
					position: 'relative',
					'&::before': {
						content: "''",
						position: 'absolute',
						top: '0',
						left: '0',
						width: '70%',
						height: '0.8rem',
						borderRadius: '50px',
						backgroundColor: '#C4161C',
					},
					'&::after': {
						content: "'hello'",
						position: 'absolute',
						top: '-25px',
						right: 'calc(30% + 1rem)',
					},
				}}
			>
				<Box sx={{ position: 'absolute', top: '-25px' }}>hi</Box>
			</Box>
			<Box
				sx={{
					width: '90%',
					marginLeft: '2rem',
					marginTop: '3rem',
					height: '0.8rem',
					borderRadius: '50px',
					backgroundColor: '#F8F9FB ',
					position: 'relative',
					'&::before': {
						content: "''",
						position: 'absolute',
						top: '0',
						left: '0',
						width: '70%',
						height: '0.8rem',
						borderRadius: '50px',
						backgroundColor: '#8794C2',
					},
					'&::after': {
						content: "'hello'",
						position: 'absolute',
						top: '-25px',
						right: 'calc(30% + 1rem)',
					},
				}}
			>
				<Box sx={{ position: 'absolute', top: '-25px' }}>hi</Box>
			</Box>
			<Box
				sx={{
					width: '90%',
					marginLeft: '2rem',
					marginTop: '3rem',
					marginBottom: '4.6rem',
					height: '0.8rem',
					borderRadius: '50px',
					backgroundColor: '#F8F9FB ',
					position: 'relative',
					'&::before': {
						content: "''",
						position: 'absolute',
						top: '0',
						left: '0',
						width: '70%',
						height: '0.8rem',
						borderRadius: '50px',
						backgroundColor: '#D4D8E9',
					},
					'&::after': {
						content: "'hello'",
						position: 'absolute',
						top: '-25px',
						right: 'calc(30% + 1rem)',
					},
				}}
			>
				<Box sx={{ position: 'absolute', top: '-25px' }}>hi</Box>
			</Box>
		</Grid>
	);
};

export default GeographyData;
