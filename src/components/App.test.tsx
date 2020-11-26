import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Is It Fantasy/i);
  expect(titleElement).toBeInTheDocument();
});
