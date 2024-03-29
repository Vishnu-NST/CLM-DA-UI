import React, { useState } from 'react';
import ReusableUserCard from '@/components/ReusableUserCard';
import CardIcon from '@/assets/svg/CardIcon';
import { Grid } from '@mui/material';
import ConformationDialogBox from '@/components/ConformationDialogBox';
import SuccessIcon from '@/assets/svg/SuccessIcon';
import ForwardArrow from '@/assets/svg/ForwardArrow';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@/components/CustomButton';
import SuccessDltIcon from '@/assets/svg/SuccessDltIcon';
import useGetUsers from '@/store/useGetUsers';

const UserList = () => {
	const getUsersQuery = useGetUsers();
	const navigate = useNavigate();
	const [openDialog, setOpenDialog] = useState({ open: false });
	const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
	const handleEdit = () => {
		console.log('Edit clicked');
		navigate('/user-management');
		// navigate("/user");
	};

	const handleDelete = () => {
		console.log('Delete clicked');
		setConfirmDeleteDialog(true);
	};

	const handleResendInvite = () => {
		console.log('Resend Invite clicked');
		setOpenDialog({
			open: true,
			title: 'Resend Invite Confirmation',
			contentTitle: 'Re-send Successfully',
			content: "We’ve sent a create password link to the user's email",
			buttonText1: 'View User Details',
			buttonText2: 'Add New User',
			showImageComponent: true,
			imageComponent: <SuccessIcon />,
			onButtonClick2: () => navigate('/user-management'),
		});
	};

	const handleCloseDialog = () => {
		if (openDialog && openDialog.buttonText1 === 'ok') {
			setOpenDialog({ open: false });
		} else {
			setOpenDialog({ open: false });
		}
	};

	const handleConfirmDelete = () => {
		console.log('Confirmed Delete');
		setConfirmDeleteDialog(false); // Close the second dialog
		setOpenDialog({
			open: true,
			title: 'Delete Confirmation',
			showImageComponent: true,
			imageComponent: <SuccessDltIcon />,
			contentTitle: 'Deleted Successfully',
			content: 'The User Details has been Successfully Deleted.',
			buttonText3: 'ok',
			onButtonClick3: handleCloseDialog,
		});
	};

	const customButtonStyle = {
		borderRadius: '7px',
		padding: '0.5rem 2.5rem',
		color: '#FFFFFF',
		backgroundColor: '#C4161C',
		'&:hover': {
			color: '#FFFFFF',
			backgroundColor: '#C4161C',
		},
		fontWeight: '500',
	};

	console.log({ openDialog });

	console.log(getUsersQuery.data);

	if (getUsersQuery.isLoading) {
		return 'Loading ...';
	}

	console.log(getUsersQuery.data);

	return (
		<div className="card-block">
			<div className="loan-pool-form-block">
				<Grid sx={{ display: 'flex', justifyContent: 'end' }}>
					<CustomButton
						buttonDisabled={false}
						customStyle={customButtonStyle}
						// onClick={handleOpenDialog}
						onClick={() =>
							navigate(
								`${location.pathname.match(
									/\/\w+\//,
								)}panel/ums/user-create`,
							)
						}
					>
						Add User &nbsp;
					</CustomButton>
				</Grid>
				<Grid container>
					{getUsersQuery.data &&
						getUsersQuery.data.length > 0 &&
						getUsersQuery?.data.map((user, idx) => {
							return (
								<ReusableUserCard
									key={idx}
									status="online"
									onEdit={handleEdit}
									onDelete={handleDelete}
									cardIcon={<CardIcon />}
									name={`${user.first_name ?? 'FF'} ${
										user.last_name ?? 'LL'
									}`}
									username={`${user.user_name}`}
									role="Relationship Manager"
									roleType="Role"
									onResendInvite={() =>
										handleResendInvite('addNewUser')
									}
									//resendInviteText="Re-send Invite"
									//forwardArrowIcon={<ForwardArrow />}
								/>
							);
						})}
				</Grid>

				<ConformationDialogBox
					open={openDialog.open}
					handleClose={handleCloseDialog}
					title={openDialog.title}
					contentTitle={openDialog.contentTitle}
					// imageComponent={
					//   openDialog.showImageComponent ? <SuccessIcon /> : null
					// }
					imageComponent={
						openDialog.showImageComponent
							? openDialog.imageComponent
							: null
					}
					content={openDialog.content}
					buttonText1={openDialog.buttonText1}
					buttonText2={openDialog.buttonText2}
					buttonText3={openDialog.buttonText3}
					onButtonClick2={() => openDialog?.onButtonClick2()}
					onButtonClick1={() =>
						openDialog?.onButtonClick1 && openDialog.onButtonClick1()
					}
					onButtonClick3={() => openDialog?.onButtonClick3()}
				/>
				<ConformationDialogBox
					open={confirmDeleteDialog}
					handleClose={() => setConfirmDeleteDialog(false)}
					title="Confirm Delete"
					contentTitle="Confirm the Delete Action"
					content="Do you really want to revoke this user's access?"
					buttonText1="Cancel"
					buttonText2="Confirm"
					onButtonClick1={() => setConfirmDeleteDialog(false)}
					onButtonClick2={handleConfirmDelete}
				/>
			</div>
		</div>
	);
};

export default UserList;
