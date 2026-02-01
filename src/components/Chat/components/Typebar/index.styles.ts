import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import COLORS from '../../../../config/styles/colors';

export const TypebarContainer = styled('form')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
    alignItems: 'center',
	padding: theme.spacing(1),
	background: COLORS.blue,
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 2)
	},
	gap: theme.spacing(1),
	width: '100%',
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
	backgroundColor: COLORS.red,
  	color: theme.palette.error.contrastText,
  	'&:hover': {
    	backgroundColor: COLORS.red,
  	},
	'&.Mui-disabled': {
		backgroundColor: COLORS.lightGrey,
		color: COLORS.white,
	}
}));
