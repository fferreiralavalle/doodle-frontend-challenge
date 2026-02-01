import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, describe, test, expect } from 'vitest'
import Chat from './index'
import type IMessage from '../../services/types/messaage'

/* ---------------- TEST DATA ---------------- */

const mockMessages: IMessage[] = [
  {
    author: 'Alice',
    message: 'Hi there',
    createdAt: new Date('2024-01-01T10:00:00Z'),
	_id: '1'
  },
  {
    author: 'Bob',
    message: 'Hello!',
    createdAt: new Date('2024-01-01T10:01:00Z'),
	_id: '2'
  },
]

/* ---------------- TESTS ---------------- */

describe('Chat', () => {
  test('renders all messages', () => {
    render(
      <Chat
        messages={mockMessages}
        ownName="Alice"
        onSendMessage={vi.fn()}
      />
    )

    const messages = screen.getAllByTestId('message')
    expect(messages).toHaveLength(2)

    expect(screen.getByText('Hi there')).toBeInTheDocument()
    expect(screen.getByText('Hello!')).toBeInTheDocument()
  })

  test('marks own messages correctly', () => {
    render(
      <Chat
        messages={mockMessages}
        ownName="Alice"
        onSendMessage={vi.fn()}
      />
    )

    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.queryByText('Alice')).not.toBeInTheDocument()
  })

  test('calls onSendMessage with ownName as author', async () => {
    const user = userEvent.setup()
    const mockSend = vi.fn()

    render(
      <Chat
        messages={mockMessages}
        ownName="Alice"
        onSendMessage={mockSend}
      />
    )
	const input = screen.getByTestId('textfield-message')
	
	await user.type(input, 'Hello from test')
    await user.click(screen.getByText('Send'))

    expect(mockSend).toHaveBeenCalledTimes(1)
    expect(mockSend).toHaveBeenCalledWith({
      author: 'Alice',
      message: 'Hello from test',
    })
  })

  
  it("shows loading indicator", () => {
    render(
      <Chat messages={[]} ownName="Bob" loadingMessages onSendMessage={vi.fn()} />
    )

    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  it("shows fetch error", () => {
    render(
      <Chat messages={[]} ownName="Bob" errorFetching onSendMessage={vi.fn()} />
    )

    expect(
      screen.getByText("Failed to retrieve messages.")
    ).toBeInTheDocument()
  })

  it("shows message send error state", () => {
    render(
      <Chat
        messages={[]}
        ownName="Bob"
        onSendMessage={vi.fn()}
        messageSentError={{ author: "Bob", message: "Oops" }}
      />
    )

    expect(screen.getByText("Oops")).toBeInTheDocument()
    expect(
      screen.getByText("Failed to send message. Try again later.")
    ).toBeInTheDocument()
  })
})
