import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for testing
import Navbar from './Navbar';
import { DarkModeProvider } from '../../context/DarkModeContext'; // Import DarkModeProvider for testing

test('renders navbar with links', () => {
  render(
    <Router>
      <DarkModeProvider>
        <Navbar />
      </DarkModeProvider>
    </Router>
  );

  // Check if the navigation links are present
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('News')).toBeInTheDocument();
  expect(screen.getByText('Schedule')).toBeInTheDocument();
  expect(screen.getByText('Players')).toBeInTheDocument();
  expect(screen.getByText('Contact Us')).toBeInTheDocument();
});
