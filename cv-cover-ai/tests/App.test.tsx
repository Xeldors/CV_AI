import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  test('renders the header', () => {
    render(<App />);
    const headerElement = screen.getByText(/header text/i); // Replace with actual header text
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the cover component', () => {
    render(<App />);
    const coverElement = screen.getByText(/cover content/i); // Replace with actual cover content
    expect(coverElement).toBeInTheDocument();
  });

  test('renders the chatbot', () => {
    render(<App />);
    const chatbotElement = screen.getByText(/chatbot/i); // Replace with actual chatbot text
    expect(chatbotElement).toBeInTheDocument();
  });

  test('renders the footer', () => {
    render(<App />);
    const footerElement = screen.getByText(/footer text/i); // Replace with actual footer text
    expect(footerElement).toBeInTheDocument();
  });
});