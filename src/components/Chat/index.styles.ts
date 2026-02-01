import { Box, CircularProgress, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import background from "src/assets/backgrounds/chat-bg.png";

export const ChatContainer = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
    alignItems: 'center',
	width: '100%',
	height: '100%',
	padding: '0px !important',
	position: 'relative'
}));

export const MessagesContainer = styled(Container)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
    alignItems: 'flex-start',
	justifyContent: 'flex-end',
	padding: theme.spacing(2, 3),
	gap: theme.spacing(2),
	flex: 1,
	maxWidth: 640,
}));

export const MessagesBox = styled(Box)(() => ({
	display: 'flex',
	width: '100%',
	flexDirection: 'column',
    alignItems: 'center',
	overflowY: 'auto',
	flex: 1,
	backgroundImage: `url(${background})`,
  	backgroundSize: 'cover',
  	backgroundPosition: 'center',
}));

export const Progress = styled(CircularProgress)(() => ({
}))
