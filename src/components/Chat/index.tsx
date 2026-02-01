import "react";
import { ChatContainer, MessagesBox, MessagesContainer, FetchError, Progress } from "./index.styles";
import type IMessage from "../../services/types/messaage";
import Message from "../Message";
import Typebar from "./components/Typebar";
import useOnScrollTop from "../../hooks/useOnScrollTop";
import { useEffect, useRef } from "react";
import { Alert, Box } from "@mui/material";

export interface MessageSent {
	message: string;
	author: string;
}

interface ChatProps {
	messages: IMessage[];
	/** Used for differenciating between own and other people's messages */
	ownName: string;
	/** true if messages are being loaded */
	loadingMessages?: boolean;
	messageSentError?: MessageSent;
	errorFetching?: boolean;
	/** Called whenever the user sends a new message, author will be ownName */
	onSendMessage(messageSent: MessageSent): void; 
	/** Called whenever the top of the messages window is reached */
	onLoadMore?: () => void;
}

const Chat = (props: ChatProps) => {
	const bottomRef = useRef<HTMLDivElement | null>(null)
	const { messages, ownName, loadingMessages, onSendMessage, onLoadMore, messageSentError, errorFetching } = props;
	const { containerRef } = useOnScrollTop({ onReachTop: onLoadMore, loading: loadingMessages, error: errorFetching })
	// used for forcing the scroll to start at the bottom after fetching messages
	const hasScrollbar = useRef<boolean | null>(false);

	const handleSendMessage = (message: string) => {
		onSendMessage({
			author: ownName,
			message,
		})
	}

	useEffect(() => {
		// Check if container has a scrollbar active
		const scrollbar = containerRef.current ? containerRef.current.scrollHeight > containerRef.current.clientHeight : false;
		if (messages.length > 0 && bottomRef.current && !hasScrollbar.current && scrollbar){
			// Scrolls to bottom after scrollbar first appears
			bottomRef.current?.scrollIntoView();
			hasScrollbar.current = true;
		}
	}, [messages, bottomRef, containerRef, hasScrollbar])

	return (
		<ChatContainer>
			<MessagesBox ref={containerRef}>
				{loadingMessages && <Progress color="primary" size={40}/>}
				{errorFetching && !loadingMessages && <FetchError severity="error">Failed to retrieve messages.</FetchError>}
				<MessagesContainer>
					{messages?.map(({ author, createdAt, message, _id }) => (
						<Message
							isSelf={ownName===author}
							authorName={author}
							date={new Date(createdAt)}
							testId={`message`}
							key={_id}
						>
							{message}
						</Message>
					))}
					{messageSentError && <Box alignSelf={'end'} display={'flex'} flexDirection={'column'} gap={1}>
						<Message date={new Date()} authorName={messageSentError.author} isSelf>
							{messageSentError.message}
						</Message>
						<Alert severity="error">Failed to send message. Try again later.</Alert>
					</Box>
					}
					<div ref={bottomRef} />
				</MessagesContainer>
			</MessagesBox>
			<Typebar onSendMessage={handleSendMessage} />
		</ChatContainer>
	)
}

export default Chat;