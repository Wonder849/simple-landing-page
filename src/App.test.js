import { render, screen } from '@testing-library/react';
import App from './App';

test('renders team header', () => {
  render(<App />);
  const headerElement = screen.getByText(/My dream team/i);
  expect(headerElement).toBeInTheDocument();
});
