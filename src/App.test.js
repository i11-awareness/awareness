import { render, screen } from '@testing-library/react';
import App from './App';


test('renders Awareness-app heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Awareness-app/i);
  expect(headingElement).toBeInTheDocument();
});