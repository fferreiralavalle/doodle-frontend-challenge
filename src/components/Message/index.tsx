import { Typography } from '@mui/material';
import { type ReactNode } from 'react';
import { MessageStyled } from './index.styles';
import formatDate from '../../utils/formatDate';

interface MessageProps {
  date: Date;
  children: ReactNode;
  authorName: string;
  isSelf?: boolean;
}

const Message = (props: MessageProps) => {
	const { date, children, authorName } = props;

	const formattedDate = formatDate(date);

	return <MessageStyled>
		<Typography variant='body2' textAlign={'left'} color='secondary'>{authorName}</Typography>
		<Typography variant="body1" textAlign={'left'}>{children}</Typography>
		<Typography variant='body2' textAlign={'left'} color='secondary'>{formattedDate}</Typography>
	</MessageStyled>
}

export default Message;