import 'react'
import useMessages from '../../hooks/useMessages';
import Chat from '../../components/Chat';

function ChatView() {
  const { messages, isLoading, lastErrorMessage, error, fetchNext, postMessage } = useMessages();

  return (
    <Chat
		messages={messages} ownName='You'
		onSendMessage={postMessage}
		loadingMessages={isLoading}
		onLoadMore={fetchNext}
		messageSentError={lastErrorMessage}
		errorFetching={!!error}
	/>
  )
}

export default ChatView
