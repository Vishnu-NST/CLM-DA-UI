import { styled } from '@mui/material/styles';
import * as React from 'react';

import {
	Box,
	BottomNavigation,
	BottomNavigationAction,
	IconButton,
	Card,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';

import LeftIcon from '@/assets/svg/LeftIcon.svg';
import RightIcon from '@/assets/svg/RightIcon.svg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from 'react-router-dom';
import DashboardIcon from '@/assets/svg/DashboardIcon';
import LoanPoolIcon from '@/assets/svg/LoanPoolIcon';
import DueDeligenceIcon from '@/assets/svg/DueDeligenceIcon';
import CurrencyExchangeIcon from '@/assets/svg/CurrencyExchangeIcon';
import PoolStatusIcon from '@/assets/svg/PoolStatusIcon';
import ReportIcon from '@/assets/svg/ReportIcon';
import ProfileIcon from '@/assets/svg/ProfileIcon';
import MifixLogo from '@/assets/svg/MiFiXLogo';
import SignOutIcon from '@/assets/svg/SignOutIcon';

const drawerWidth = 280;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(18)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);

export default function BaseLayout() {
	// const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(!open);
	};

	const pages = [
		{ text: 'Dashboard', to: 'dashboard', icon: <DashboardIcon /> },
		{ text: 'Create Loan Pool', to: 'lpc', icon: <LoanPoolIcon /> },
		{ text: 'Due Diligence', to: 'lpt', icon: <DueDeligenceIcon /> },
		{ text: 'Transaction', to: 'queries', icon: <CurrencyExchangeIcon /> },
		{ text: 'Pool Status', to: 'slp', icon: <PoolStatusIcon /> },
		{ text: 'Reports', to: 'reports', icon: <ReportIcon /> },
	];

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />

			<Drawer variant="permanent" open={open}>
				<Card
					sx={{
						height: '5.1rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingTop: '1rem',
					}}
				>
					<CardContent>
						<Grid
							container
							sx={{
								display: 'flex',
								alignItems: 'center',
								border: '1px solid lightgrey',
								borderRadius: '0.5rem',
								padding: '4px',
								height: '4rem',
							}}
						>
							<Grid item style={{ marginTop: '0.1rem' }}>
								<ProfileIcon />
							</Grid>
							{
								open ? (
									<Grid
										item
										sx={{
											display: 'flex',
											flexDirection: 'column',
											marginLeft: 1,
										}}
									>
										<Typography
											style={{
												fontSize: '0.9rem',
												fontWeight: 'bold',
											}}
										>
											NBFC Company Name
										</Typography>
										<Typography
											style={{
												fontSize: '0.8rem',
												color: 'var(--Sub-text-2, #8794C2)',
											}}
										>
											NBFC@gmail.com
										</Typography>
									</Grid>
								) : null /* Use null for the else condition */
							}
						</Grid>
					</CardContent>
				</Card>

				<List>
					{pages.map((page) => (
						<ListItem
							key={page.text}
							disablePadding
							sx={{
								display: 'block',
								ml: '0.6rem',
								'&.MuiListItem-root.Mui-selected': {
									backgroundColor: '#C4161C',
								},
							}}
						>
							<Link
								to={page.to}
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
										color: 'var(--Sub-text-2, #8794C2)',
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
										}}
									>
										{page.icon}
									</ListItemIcon>
									<ListItemText
										primary={page.text}
										sx={{
											opacity: open ? 1 : 0,
											'& .MuiTypography-root': {
												fontSize: '12px',
											},
										}}
									/>
								</ListItemButton>
							</Link>
						</ListItem>
					))}
				</List>
				<BottomNavigation
					showLabels
					style={{
						marginTop: '7rem',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Grid
						item
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: '8px',
							color: '#8794C2',
						}}
					>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<IconButton
								sx={{
									marginLeft: '1.5rem',
									'&.MuiIconButton-root': {
										padding: '0',
									},
								}}
								disableRipple
							>
								<SignOutIcon />
							</IconButton>
							{open && (
								<>
									<Typography
										variant="body2"
										style={{
											fontSize: '0.85rem',
											paddingTop: '0.2rem',
											paddingBottom: '0.5rem',
											marginRight: '7rem',
										}}
									>
										Sign Out
									</Typography>

									<ChevronRightIcon
										sx={{ marginBottom: 'auto' }}
									/>
								</>
							)}
						</div>
					</Grid>
					<BottomNavigationAction
						sx={{
							border: '1px solid lightgrey',
							borderRadius: '0.5rem',
							padding: '0.2rem 0rem',
							backgroundColor: '#F8F9FB',
							width: '100',
						}}
						icon={<MifixLogo />}
					/>
				</BottomNavigation>
			</Drawer>
			<div
				style={{ marginTop: '4.4rem', marginLeft: '-12px', zIndex: '9999' }}
			>
				<img
					src={open ? LeftIcon : RightIcon}
					alt="Expand"
					style={{
						border: '0.1px solid lightgrey',
						borderRadius: '50%',
						backgroundColor: 'white',
					}}
					onClick={handleDrawerOpen}
				/>
			</div>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Outlet />
			</Box>
		</Box>
	);
}
