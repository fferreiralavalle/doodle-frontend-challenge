import "react"
import type IMessage from "../services/types/messaage"
import useGetMessages from "./useGetMessages"
import usePostMessages from "./usePostMessage"
import type { MessageSent } from "../components/Chat"

const useMessages = () => {
	const { messages, isLoading, error, fetchNext } = useGetMessages()
	const { postAsync } = usePostMessages();

	const handlePostMessage = (message: MessageSent) => {
		postAsync(message)
	}

	return {
		messages: messages as IMessage[],
		fetchNext,
		postMessage: handlePostMessage,
		isLoading,
		error,
	}
}

export default useMessages;