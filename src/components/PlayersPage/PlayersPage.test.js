import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayersPage from './PlayersPage';

test('renders players page with player information', () => {
  render(<PlayersPage />);

  // Check if the page title and player information are present
  expect(screen.getByText('Meet Our Players')).toBeInTheDocument();

  // Check player information for player 1
  expect(screen.getByText('Alex Ashak')).toBeInTheDocument();
  expect(screen.getByText('Forward from Australia')).toBeInTheDocument();
  expect(
    screen.getByText('A prolific goal-scorer known for his speed and agility on the field.')
  ).toBeInTheDocument();

  // Check player information for player 2
  expect(screen.getByText('Christiane Fahd')).toBeInTheDocument();
  expect(screen.getByText('Midfielder from Germany')).toBeInTheDocument();
  expect(
    screen.getByText('A playmaker with exceptional passing ability and vision.')
  ).toBeInTheDocument();
});
