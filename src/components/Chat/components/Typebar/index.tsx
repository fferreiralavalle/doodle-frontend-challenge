import "react";
import { Content, SubmitButton, TypebarContainer } from "./index.styles";
import { TextField } from "@mui/material";
import { useState } from "react";

interface TypebarProps {
	/** Called whenever submit button is pressed */
	onSendMessage(messageSent: string): void; 
}

const Typebar = (props: TypebarProps) => {
	const { onSendMessage } = props;
	const [message, setMessage] = useState('');

	const handleSendMessage = (val: string) => {
		if (onSendMessage){
			setMessage('');
			onSendMessage(val)
		}
	}

	const handleSubmit = (e: React.SubmitEvent) => {
		 e.preventDefault();
		 handleSendMessage(message)
	}

	return (
		<TypebarContainer onSubmit={handleSubmit}>
			<Content>
				<TextField
					placeholder="Message" variant='filled'
					value={message} onChange={({ target }) => setMessage(target.value)}
					sx={{ flex: 1 }}
					inputProps={{ 'data-testid': 'textfield-message' }}
				/>
				<SubmitButton
					disabled={!message}
					variant='contained'
					type="submit"
				>
					Send
				</SubmitButton>
			</Content>
		</TypebarContainer>
	)
}

export default Typebar;