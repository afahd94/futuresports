import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUsPage from './ContactUsPage';

test('renders contact page content', () => {
  render(<ContactUsPage />);

  // Check if the heading "Contact Us" is present
  const headingElement = screen.getByText('Contact Us');
  expect(headingElement).toBeInTheDocument();

  // Check if the contact information is present
  const generalInquiries = screen.getByText('General Inquiries');
  expect(generalInquiries).toBeInTheDocument();
  expect(screen.getByText('Email: info@futuresportsclub.com')).toBeInTheDocument();
  expect(screen.getByText('Phone: +1 (123) 456-7890')).toBeInTheDocument();

  const membership = screen.getByText('Membership');
  expect(membership).toBeInTheDocument();
  expect(screen.getByText('Email: membership@futuresportsclub.com')).toBeInTheDocument();
  expect(screen.getByText('Phone: +1 (987) 654-3210')).toBeInTheDocument();

  const coaching = screen.getByText('Coaching');
  expect(coaching).toBeInTheDocument();
  expect(screen.getByText('Email: coaching@futuresportsclub.com')).toBeInTheDocument();
  expect(screen.getByText('Phone: +1 (555) 555-5555')).toBeInTheDocument();
});
