import "react";
import { ChatContainer, MessagesBox, MessagesContainer, Progress } from "./index.styles";
import type IMessage from "../../services/types/messaage";
import Message from "../Message";
import Typebar from "./components/Typebar";
import useOnScrollTop from "../../hooks/useOnScrollTop";
import { useEffect, useRef } from "react";

export interface MessageSent {
	message: string;
	author: string;
}

interface ChatProps {
	messages: IMessage[];
	/** Used for differenciating between own and other people's messages */
	ownName: string;
	/** true if messages are being loaded */
	loadingMessages: boolean;
	/** Called whenever the user sends a new message, author will be ownName */
	onSendMessage(messageSent: MessageSent): void; 
	/** Called whenever the top of the messages window is reached */
	onLoadMore(): void;
}

const Chat = (props: ChatProps) => {
	const bottomRef = useRef<HTMLDivElement | null>(null)
	const { messages, ownName, loadingMessages, onSendMessage, onLoadMore } = props;
	const { containerRef } = useOnScrollTop({ onReachTop: onLoadMore, loading: loadingMessages })

	const handleSendMessage = (message: string) => {
		onSendMessage({
			author: ownName,
			message,
		})
	}

	useEffect(() => {
		// Scrolls to bottom after first messages are loaded
		if (messages.length <= 10 && containerRef?.current)
			bottomRef.current?.scrollIntoView();
	}, [messages, containerRef])

	return (
		<ChatContainer>
			<MessagesBox  ref={containerRef}>
				{loadingMessages && <Progress color="primary" size='sm'/>}
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
					<div ref={bottomRef} />
				</MessagesContainer>
			</MessagesBox>
			<Typebar onSendMessage={handleSendMessage} />
		</ChatContainer>
	)
}

export default Chat;