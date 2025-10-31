import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatBot from '../../src/components/ChatBot';

describe('ChatBot Component', () => {
  test('renders ChatBot component', () => {
    render(<ChatBot />);
    const chatBotElement = screen.getByText(/chatbot/i);
    expect(chatBotElement).toBeInTheDocument();
  });

  test('handles user input and displays response', () => {
    render(<ChatBot />);
    const inputElement = screen.getByPlaceholderText(/type your message/i);
    fireEvent.change(inputElement, { target: { value: 'Tell me about your skills' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });

    const responseElement = screen.getByText(/your skills include/i); // Adjust based on expected response
    expect(responseElement).toBeInTheDocument();
  });

  test('displays loading indicator while waiting for response', () => {
    render(<ChatBot />);
    const inputElement = screen.getByPlaceholderText(/type your message/i);
    fireEvent.change(inputElement, { target: { value: 'What is your experience?' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });

    const loadingElement = screen.getByText(/loading/i); // Adjust based on loading indicator text
    expect(loadingElement).toBeInTheDocument();
  });
});