import { render, screen } from '@testing-library/react';
import App from './App';
import Postlist from './components/post-list.component'

test('renders learn react link', () => {
  render(<Postlist />);
  const linkElement = screen.getByText(/You are on the Post List components/i);
  expect(linkElement).toBeInTheDocument();
});
