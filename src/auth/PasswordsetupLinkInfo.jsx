import Mifix from '@/assets/svg/Mifix.svg';
import { Grid, Typography } from '@mui/material';
import './styles/SignUpAndLoginForms.scss';

const PasswordsetupLinkInfo = () => {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			style={{ marginTop: '15rem' }}
		>
			<img src={Mifix} alt="Mifix" style={{ marginBottom: '2rem' }} />
			<Typography className="pwdLinkMsgCls">
				We&apos; sent the link to create your password to your email. Please
				check your
			</Typography>
			<Typography className="pwdLinkMsgCls">
				inbox and follow the instructions to setup your password.
			</Typography>
		</Grid>
	);
};

export default PasswordsetupLinkInfo;
