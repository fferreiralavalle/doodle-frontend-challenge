import { useInfiniteQuery } from "react-query"
import fetchMessages from "../services/apis/getMessages"
import type IMessage from "../services/types/messaage"
import { useMemo } from "react"

const useGetMessages = () => {
	const { data, error, fetchNextPage, isFetching, isLoading, isError } = useInfiniteQuery({
		queryKey: ['messages'],
		queryFn: ({ pageParam }) => fetchMessages({ before: pageParam }),
		getNextPageParam: (lastPage) => {
			if (lastPage.length === 0) return undefined
			const oldest = lastPage[0]
			return new Date(oldest.createdAt)
 		 },
		 refetchOnWindowFocus: false,
	})

	const messages = useMemo(() => {
		if (data?.pages){
			return [...data.pages].reverse().flat()
		}
		return []
	},[data])

	return {
		messages: messages as IMessage[],
		pages: data?.pages || [],
		fetchNext: fetchNextPage,
		isLoading: isFetching || isLoading,
		error: isError || error,
	}
}

export default useGetMessages;