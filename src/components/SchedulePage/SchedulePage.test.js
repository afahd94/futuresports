import React from 'react';
import { render, screen } from '@testing-library/react';
import SchedulePage from './SchedulePage';

test('renders schedule page with match schedule', () => {
  render(<SchedulePage />);

  // Check if the page title is present
  expect(screen.getByText('Match Schedule')).toBeInTheDocument();

  // Check if specific schedule details are present
  expect(screen.getByText('Oct 15, 2023')).toBeInTheDocument();
  expect(screen.getByText('Brisbane Bullets')).toBeInTheDocument();
  expect(screen.getByText('Suncorp Arena')).toBeInTheDocument();

  expect(screen.getByText('Oct 22, 2023')).toBeInTheDocument();
  expect(screen.getByText('Melbourne Storm')).toBeInTheDocument();
  expect(screen.getByText('AAMI Park')).toBeInTheDocument();

  expect(screen.getByText('Oct 29, 2023')).toBeInTheDocument();
  expect(screen.getByText('Sydney Swans')).toBeInTheDocument();
  expect(screen.getByText('Accore Stadium')).toBeInTheDocument();
});
