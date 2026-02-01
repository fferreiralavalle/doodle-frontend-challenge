import 'react'
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './config/styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ChatView from './containers/ChatView'

const queryClient = new QueryClient()

function App() {
  return (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={theme}>
			<ChatView />
		</ThemeProvider>
	</QueryClientProvider>
  )
}

export default App
