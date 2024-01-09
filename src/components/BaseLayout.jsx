import { styled } from '@mui/material/styles';
import * as React from 'react';

import { Box, Button, Card, CardContent } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import LeftIcon from '@/assets/svg/LeftIcon.svg';
import RightIcon from '@/assets/svg/RightIcon.svg';
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

const drawerWidth = 240;

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
		width: `calc(${theme.spacing(8)} + 1px)`,
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
		console.log('@@@');
		setOpen(!open);
	};

	// const handleDrawerClose = () => {
	// 	setOpen(false);
	// };

	const pages = [
		{ text: 'Dashboard', to: 'stats', icon: <DashboardIcon /> },
		{ text: 'Add Product Loan Pool', to: 'lpc', icon: <LoanPoolIcon /> },
		{ text: 'Pool Timeline', to: 'lpt', icon: <DueDeligenceIcon /> },
		{ text: 'Queries', to: 'queries', icon: <CurrencyExchangeIcon /> },
		{ text: 'Transaction', to: 'txn', icon: <PoolStatusIcon /> },
		{ text: 'Sold Loan Pool', to: 'slp', icon: <PoolStatusIcon /> },
		{ text: 'reports', to: 'reports', icon: <ReportIcon /> },
	];

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />

			<Drawer variant="permanent" open={open}>
				<Card>
					<CardContent>
						<Button variant="contained" color="primary">
							Click me
						</Button>
					</CardContent>
				</Card>

				<List>
					{pages.map((page) => (
						<ListItem
							key={page.text}
							disablePadding
							sx={{ display: 'block' }}
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
										sx={{ opacity: open ? 1 : 0 }}
									/>
								</ListItemButton>
							</Link>
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
			<div
				style={{ marginTop: '4.2rem', marginLeft: '-12px', zIndex: '9999' }}
			>
				<img
					// src={theme.direction === 'rtl' ? { RightIcon } : { LeftIcon }}
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
				<Typography>DYNAMIC COMPONENT HERE</Typography>
				<Outlet />
			</Box>
		</Box>
	);
}
