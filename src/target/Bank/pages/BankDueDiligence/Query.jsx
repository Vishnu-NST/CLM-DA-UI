import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

// const useStyles = makeStyles((theme) => ({
// 	paper: {
// 		position: 'absolute',
// 		width: 400,
// 		backgroundColor: theme.palette.background.paper,
// 		boxShadow: theme.shadows[5],
// 		padding: theme.spacing(4),
// 		outline: 'none',
// 	},
// }));

function Query() {
	const [open, setOpen] = useState(false);
	const [modalStyle] = useState(getModalStyle);

	const CustomModal = () => {
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}
			>
				<div style={modalStyle} className={classes.paper}>
					<Typography variant="h6" id="modal-title">
						Hiiiiyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
					</Typography>
				</div>
			</Modal>
		);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const classes = useStyles();

	return (
		<div>
			<div>
				<Typography gutterBottom>
					Click to get the full Modal experience!
				</Typography>
				<Button
					onClick={() => {
						handleOpen();
					}}
				>
					hello
				</Button>
			</div>

			<CustomModal />
		</div>
	);
}

export default Query;

// import React from 'react';

// function Query() {
// 	return <div></div>;
// }

// export default Query;
