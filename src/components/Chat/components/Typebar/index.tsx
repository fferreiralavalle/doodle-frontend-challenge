import "react";
import { SubmitButton, TypebarContainer } from "./index.styles";
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

	return (
		<TypebarContainer onSubmit={() => handleSendMessage(message)}>
			<TextField
				placeholder="Message" variant='filled'
				value={message} onChange={({ target }) => setMessage(target.value)}
				sx={{ flex: 1 }}
				inputProps={{ 'data-testid': 'textfield-message' }}
			/>
			<SubmitButton disabled={!message} variant='contained'
				onClick={() => handleSendMessage(message)}
				type='submit'
			>
				Send
			</SubmitButton>
		</TypebarContainer>
	)
}

export default Typebar;