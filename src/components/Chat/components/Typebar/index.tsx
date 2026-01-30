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

	return (
		<TypebarContainer>
			<TextField
				placeholder="Message" variant='filled'
				value={message} onChange={({ target }) => setMessage(target.value)}
				sx={{ flex: 1 }}
			/>
			<SubmitButton disabled={!message} variant='contained'
				onClick={() => onSendMessage(message)}
			>
				Send
			</SubmitButton>
		</TypebarContainer>
	)
}

export default Typebar;