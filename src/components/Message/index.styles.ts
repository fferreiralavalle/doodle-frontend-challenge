import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import COLORS from '../../config/styles/colors';

export const MessageStyled = styled(Paper)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '70%',
    alignItems: 'start',
	padding: theme.spacing(2),
	border: `1px solid ${COLORS.grey}`,
}));
