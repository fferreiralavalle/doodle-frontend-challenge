import "react"
import type IMessage from "../services/types/messaage"
import useGetMessages from "./useGetMessages"
import usePostMessages from "./usePostMessage"
import type { MessageSent } from "../components/Chat"
import { useState } from "react"
import { type IPostMessage } from "../services/types/messaage"

const useMessages = () => {
	const { messages, isLoading, error, fetchNext } = useGetMessages()
	const { postAsync, error: sentError } = usePostMessages({ onError: (_, errMessage) => setLastErrorMessage(errMessage) });
	const [lastErrorMessage, setLastErrorMessage] = useState<IPostMessage | undefined>();

	const handlePostMessage = (message: MessageSent) => {
		setLastErrorMessage(undefined);
		postAsync(message)
	}

	return {
		messages: messages as IMessage[],
		fetchNext,
		postMessage: handlePostMessage,
		isLoading,
		error,
		sentError,
		lastErrorMessage: lastErrorMessage,
	}
}

export default useMessages;