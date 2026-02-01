import { useMutation, useQueryClient, type InfiniteData } from "react-query"
import type { IPostMessage } from "../services/types/messaage"
import postMessage from "../services/apis/postMessage"
import type IMessage from "../services/types/messaage"


interface IUsePostMessagesProps {
	onError?: (error: unknown, message: IPostMessage) => void
}

const usePostMessages = (props: IUsePostMessagesProps = {}) => {
	const { onError } = props;
	const queryClient = useQueryClient()

	const { data, isLoading, error, mutate, mutateAsync } = useMutation({
		mutationFn: ({ message }: { message: IPostMessage}) => postMessage(message),
		onError: (error, { message }) => onError && onError(error, message),
		onSuccess: (newMessage) => {
			queryClient.setQueryData<InfiniteData<IMessage[]> | undefined>(['messages'], (oldData) => {
				if (!oldData) return oldData

				return {
					...oldData,
					pages: oldData.pages.map((page, i) => {
						if (i === 0) {
							// Add the new message to the first page
							return [...page, newMessage]
						}
						return page
					}),
				}
  		})
	}
	})

	const handleSendMessage = (message: IPostMessage) => {
		mutate({ message })
	}

	const handleSendMessageAsync = async (message: IPostMessage) => mutateAsync({ message })

	return {
		data,
		post: handleSendMessage,
		postAsync: handleSendMessageAsync,
		isLoading,
		error,
	}
}

export default usePostMessages;