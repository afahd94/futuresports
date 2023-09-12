import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders homepage content', () => {
  render(<HomePage />);

  // Check if the heading "Welcome to FutureSports Soccer Club" is present
  const headingElement = screen.getByText('Welcome to FutureSports Soccer Club');
  expect(headingElement).toBeInTheDocument();

  // Check if some specific text is present
  const textElement = screen.getByText('FutureSports Soccer Club is a premier soccer club dedicated');
  expect(textElement).toBeInTheDocument();

  // Check if the images are rendered (you can adjust the alt text accordingly)
  const image1 = screen.getByAltText('background image');
  expect(image1).toBeInTheDocument();

  const image2 = screen.getByAltText('background image');
  expect(image2).toBeInTheDocument();

  const image3 = screen.getByAltText('background image');
  expect(image3).toBeInTheDocument();

  const image4 = screen.getByAltText('background image');
  expect(image4).toBeInTheDocument();
});

