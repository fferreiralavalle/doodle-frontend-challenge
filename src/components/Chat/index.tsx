import "react";
import { ChatContainer, MessagesBox, MessagesContainer } from "./index.styles";
import type IMessage from "../../services/types/messaage";
import Message from "../Message";
import Typebar from "./components/Typebar";

interface MessageSent {
	message: string;
	author: string;
}

interface ChatProps {
	messages: IMessage[];
	/** Used for differenciating between own and other people's messages */
	ownName: string;
	/** Called whenever the user sends a new message, author will be ownName */
	onSendMessage(messageSent: MessageSent): void; 
}

const Chat = (props: ChatProps) => {
	const { messages, ownName, onSendMessage } = props;

	const handleSendMessage = (message: string) => {
		onSendMessage({
			author: ownName,
			message,
		})
	}

	return (
		<ChatContainer>
			<MessagesBox>
				<MessagesContainer>
					{messages?.map(({ author, createdAt, message }) => (
						<Message
							isSelf={ownName===author}
							authorName={author}
							date={new Date(createdAt)}
						>
							{message}
						</Message>
					))}
				</MessagesContainer>
			</MessagesBox>
			<Typebar onSendMessage={handleSendMessage} />
		</ChatContainer>
	)
}

export default Chat;