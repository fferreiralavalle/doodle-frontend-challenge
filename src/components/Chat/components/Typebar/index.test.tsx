import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, describe, test, expect } from 'vitest'
import Typebar from './index'

describe('Typebar', () => {
  test('send button is disabled initially', () => {
    const mockSend = vi.fn()
    render(<Typebar onSendMessage={mockSend} />)

    const button = screen.getByRole('button', { name: /send/i })
    expect(button).toBeDisabled()
  })

  test('enables send button when user types a message', async () => {
    const user = userEvent.setup()
    const mockSend = vi.fn()

    render(<Typebar onSendMessage={mockSend} />)

    const input = screen.getByPlaceholderText(/message/i)
    const button = screen.getByRole('button', { name: /send/i })

    await user.type(input, 'Hello world')

    expect(button).toBeEnabled()
  })

  test('calls onSendMessage with the typed message when send is clicked', async () => {
    const user = userEvent.setup()
    const mockSend = vi.fn()

    render(<Typebar onSendMessage={mockSend} />)

    const input = screen.getByPlaceholderText(/message/i)
    const button = screen.getByRole('button', { name: /send/i })

    await user.type(input, 'Test message')
    await user.click(button)

    expect(mockSend).toHaveBeenCalledTimes(1)
    expect(mockSend).toHaveBeenCalledWith('Test message')
  })

  test('does not call onSendMessage if message is empty', async () => {
   	const mockSend = vi.fn()
	render(<Typebar onSendMessage={mockSend} />)

	const button = screen.getByRole('button', { name: /send/i })

	expect(button).toBeDisabled()
	expect(mockSend).not.toHaveBeenCalled()
  })
})
