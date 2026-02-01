import 'react'
import useMessages from '../../hooks/useMessages';
import Chat from '../../components/Chat';

function ChatView() {
  const { messages, isLoading, error, fetchNext, postMessage } = useMessages();

  return (
    <Chat
		messages={messages} ownName='You'
		onSendMessage={postMessage}
		loadingMessages={isLoading}
		onLoadMore={fetchNext}
	/>
  )
}

export default ChatView
