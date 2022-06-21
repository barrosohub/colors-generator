import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello!/i);
  expect(linkElement).toBeInTheDocument();
});
