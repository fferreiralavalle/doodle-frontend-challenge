import { Paper, type PaperProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import COLORS from '../../config/styles/colors';

interface MessageStyledProps extends PaperProps {
  isSelf?: boolean
}

export const MessageStyled = styled(Paper)<MessageStyledProps>(({ theme, isSelf }) => ({
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '70%',
    alignItems: 'start',
	padding: theme.spacing(2),
	backgroundColor: isSelf ? COLORS.yellow : undefined,
	border: `1px solid ${COLORS.grey}`,
	alignSelf: isSelf ? 'flex-end' : undefined,
}));
