import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import COLORS from '../../../../config/styles/colors';
import WIDTHS from '../../../../config/styles/widths';

export const TypebarContainer = styled('form')(() => ({
	display: 'flex',
	justifyContent: 'center',
    alignItems: 'center',
	background: COLORS.blue,
	width: '100%',
}));

export const Content = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
    alignItems: 'center',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 2)
	},
	padding: theme.spacing(1, 2),
	gap: theme.spacing(1),
	width: '100%',
	maxWidth: WIDTHS.CHAT_WIDTH,
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
