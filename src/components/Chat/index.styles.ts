import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import background from "src/assets/backgrounds/chat-bg.png";

export const ChatContainer = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
    alignItems: 'center',
	width: '100%',
	height: '100%',
	padding: '0px !important',
}));

export const MessagesContainer = styled(Container)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
    alignItems: 'flex-start',
	padding: theme.spacing(2, 3),
	gap: theme.spacing(2),
	flex: 1,
	maxWidth: 640,
}));

export const MessagesBox = styled(Container)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
    alignItems: 'flex-start',
	padding: theme.spacing(2, 3),
	gap: theme.spacing(2),
	flex: 1,
	overflowY: 'auto',
	backgroundImage: `url(${background})`,
  	backgroundSize: 'cover',
  	backgroundPosition: 'center',
}));
