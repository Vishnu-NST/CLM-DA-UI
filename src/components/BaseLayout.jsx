/* eslint-disable no-unused-vars */
import { styled } from '@mui/material/styles';
import * as React from 'react';
import PoweredByMifix from '../assets/svg/PoweredByMifix';
import {
	Box,
	BottomNavigation,
	IconButton,
	Card,
	CardContent,
	Grid,
	Typography,
	Button,
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
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ProfileIcon from '@/assets/svg/ProfileIcon';
import MifixLogo from '@/assets/svg/MiFiXLogo';
import SignOutIcon from '@/assets/svg/SignOutIcon';

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflow: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflow: 'hidden',
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
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, isOpen }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(isOpen && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!isOpen && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);

export default function BaseLayout(props) {
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(!open);
	};

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	const { pages } = props;

	const navigate = useNavigate();
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />

			<Drawer variant="permanent" isOpen={open}>
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
								marginBottom: '1rem',
								marginTop: '0.5rem',
							}}
						>
							<Grid item style={{ marginBottom: '1rem' }}>
								<Button
									onClick={() => {
										navigate('/panel/ums/profile');
									}}
									color="inherit"
								>
									<ProfileIcon />
								</Button>
							</Grid>
							{open ? (
								<Grid
									item
									sx={{
										display: 'flex',
										flexDirection: 'column',
										marginLeft: 1,
										marginBottom: '1.5rem',
									}}
								>
									<Typography
										style={{
											fontSize: '0.7rem',
											fontWeight: 'bold',
										}}
									>
										NBFC Company Name
									</Typography>
									<Typography
										style={{
											fontSize: '0.6rem',
											color: 'var(--Sub-text-2, #8794C2)',
										}}
									>
										NBFC@gmail.com
									</Typography>
								</Grid>
							) : null}
						</Grid>
					</CardContent>
				</Card>

				<List>
					{pages.map((page, index) => (
						<ListItem
							key={page.text}
							disablePadding
							sx={{
								display: 'block',
								width: open ? '88%' : '80%',
								ml: open ? '1rem' : '0.4rem',
								backgroundColor:
									selectedIndex === index
										? '#C4161C'
										: 'transparent',
								border: '1px solid #FFFF',
								borderRadius: '0.5rem',
							}}
						>
							<Link
								to={page.to}
								sx={{
									textDecoration: 'none',
									color: 'inherit',
								}}
							>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
										color:
											selectedIndex === index
												? '#FFFFFF'
												: 'var(--Sub-text-2, #8794C2)',
									}}
									selected={selectedIndex === index}
									onClick={(event) =>
										handleListItemClick(event, index)
									}
								>
									<ListItemIcon
										sx={{
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
											color:
												selectedIndex === index
													? '#FFFFFF'
													: 'var(--Sub-text-2, #8794C2)',
										}}
									>
										{page.icon(selectedIndex === index)}
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
						marginTop: '8rem',
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
											margin: '0.5rem 7rem 0 0.7rem',
										}}
									>
										Sign Out
									</Typography>

									<ChevronRightIcon />
								</>
							)}
						</div>
					</Grid>
					<Box
						sx={{
							border: '1px solid lightgrey',
							borderRadius: '0.5rem',
							padding: '0.2rem 0rem',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						{open ? <PoweredByMifix /> : <MifixLogo />}
					</Box>
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
						cursor: 'pointer',
					}}
					onClick={handleDrawerOpen}
				/>
			</div>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					background: 'rgba(248, 249, 251, 1)',
					width: '100%',
				}}
			>
				<Outlet />
			</Box>
		</Box>
	);
}
