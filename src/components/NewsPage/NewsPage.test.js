import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsPage from './NewsPage';

test('renders news page with articles', () => {
  render(<NewsPage />);

  // Check if the news articles and headings are present
  expect(screen.getByText('Latest News')).toBeInTheDocument();
  expect(screen.getByText('FutureSports Wins Championship')).toBeInTheDocument();
  expect(
    screen.getByText(
      'We are excited to announce that FutureSports Soccer Club has won the championship title for the third consecutive year.'
    )
  ).toBeInTheDocument();

  expect(screen.getByText('New Signing: Star Forward')).toBeInTheDocument();
  expect(
    screen.getByText(
      'FutureSports is proud to welcome a new addition to the team, Christiane Fahd, a renowned forward with an impressive goal-scoring record.'
    )
  ).toBeInTheDocument();
});
