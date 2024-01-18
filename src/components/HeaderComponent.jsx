import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import NewNotification from '../assets/svg/NewNotification';
import NoNotification from '../assets/svg/NoNotification';
import LogoIcon from '../assets/svg/LogoIcon';
import { useNavigate } from 'react-router-dom';

export const HeaderComp = ({ title, breadCrumbs, TabsComp, SearchComp }) => {
	const notification = true;
	const navigate = useNavigate();

	return (
		<Box
			align="center"
			sx={{
				paddingLeft: '0.7rem',
			}}
		>
			<Card
				elevation={0}
				sx={{
					backgroundColor: '#F8F9FB',
					borderRadius: '0rem',
					p: 1,
				}}
			>
				<div>
					<Typography
						sx={{
							ml: 1,
							fontFamily: 'Poppins, sans-serif',
							fontSize: '0.875rem',
							fontWeight: 400,
							color: '#8794C2',
						}}
					>
						<div className="flex">
							{breadCrumbs?.map((item, idx) => {
								return (
									<div
										key={idx}
										onClick={() => navigate(item?.path)}
										style={{
											cursor: 'pointer',
										}}
									>
										{idx !== 0 && <>&nbsp;/ &nbsp;</>}
										{item?.data}
									</div>
								);
							})}
						</div>
					</Typography>
				</div>
				<Grid container>
					<Grid
						align="left"
						item
						sm={2.5}
						sx={{
							display: 'flex',
							alignItems: 'flex-end',
						}}
					>
						<Typography
							sx={{
								ml: 1,
								fontFamily: 'Poppins, sans-serif',
								fontSize: '1.3rem',
								fontWeight: 600,
								color: '#1B1B1B',
								mt: 1,
							}}
						>
							{title}
						</Typography>
					</Grid>
					<Grid align="left" sm={4} item>
						{TabsComp && <TabsComp />}
					</Grid>
					<Grid
						align="right"
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
						}}
						item
						sm={5.3}
					>
						{SearchComp && <SearchComp />}
						&nbsp; &nbsp; &nbsp;
						<LogoIcon />
						&nbsp; &nbsp;
						<div>NBFC Logo</div>
						&nbsp;
						{notification == true ? (
							<NewNotification />
						) : (
							<NoNotification />
						)}
					</Grid>
				</Grid>
			</Card>
		</Box>
	);
};
export default HeaderComp;
