import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Message from './index';
import formatDate from '../../utils/formatDate';

vi.mock('../../utils/formatDate', () => ({
  default: vi.fn(),
}));

describe('Message component', () => {
  const mockDate = new Date('2024-01-01T12:00:00Z');

  beforeEach(() => {
    vi.mocked(formatDate).mockReturnValue('Jan 1, 2024');
  });

  it('renders message content', () => {
    render(
      <Message date={mockDate} authorName="Alice">
        Hello world
      </Message>
    );

    expect(screen.getAllByText('Hello world')[0]).toBeInTheDocument();
  });

  it('renders author name when isSelf is false', () => {
    render(
      <Message date={mockDate} authorName="Alice">
        Hello world
      </Message>
    );

    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('does NOT render author name when isSelf is true', () => {
    render(
      <Message date={mockDate} authorName="Alice" isSelf>
        Hello world
      </Message>
    );

    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
  });

  it('renders formatted date', () => {
    render(
      <Message date={mockDate} authorName="Alice">
        Hello world
      </Message>
    );

    expect(formatDate).toHaveBeenCalledWith(mockDate);
    expect(screen.getByText('Jan 1, 2024')).toBeInTheDocument();
  });

  it('aligns date to the right when isSelf is true', () => {
    render(
      <Message date={mockDate} authorName="Alice" isSelf>
        Hello world
      </Message>
    );

    const date = screen.getByText('Jan 1, 2024');
    expect(date).toHaveStyle({ textAlign: 'right' });
  });

  it('aligns date to the left when isSelf is false', () => {
    render(
      <Message date={mockDate} authorName="Alice">
        Hello world
      </Message>
    );

    const date = screen.getByText('Jan 1, 2024');
    expect(date).toHaveStyle({ textAlign: 'left' });
  });
});
