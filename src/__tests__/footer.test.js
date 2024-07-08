import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/footer';

describe('Footer Component', () => {
  test('renders Footer with default links', () => {
    render(<Footer />);

    const linkElements = screen.getAllByRole('link').filter(link => !link.getAttribute('aria-label'));
    expect(linkElements).toHaveLength(4);

    expect(linkElements[0]).toHaveTextContent('Home');
    expect(linkElements[1]).toHaveTextContent('About');
    expect(linkElements[2]).toHaveTextContent('Menu');
    expect(linkElements[3]).toHaveTextContent('Order');
  });

  test('renders Footer with custom links', () => {
    const customLinks = [
      { title: 'Custom Home', url: '/' },
      { title: 'Custom About', url: '/about' },
      { title: 'Custom Menu', url: '/menu' },
      { title: 'Custom Order', url: '/order' },
      { title: 'Contact', url: '/contact' },
    ];

    render(<Footer links={customLinks} />);

    const linkElements = screen.getAllByRole('link').filter(link => !link.getAttribute('aria-label'));
    expect(linkElements).toHaveLength(5);

    expect(linkElements[0]).toHaveTextContent('Custom Home');
    expect(linkElements[1]).toHaveTextContent('Custom About');
    expect(linkElements[2]).toHaveTextContent('Custom Menu');
    expect(linkElements[3]).toHaveTextContent('Custom Order');
    expect(linkElements[4]).toHaveTextContent('Contact');
  });

  test('renders current year', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const yearElement = screen.getByText(`© ${currentYear}`);
    expect(yearElement).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<Footer />);

    const facebookLink = screen.getByLabelText('facebook');
    const instagramLink = screen.getByLabelText('instagram');
    const twitterLink = screen.getByLabelText('twitter');

    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(<Footer />);

    const phoneNumber = screen.getByText('801-384-8776');
    const email = screen.getByText('contact@ensigneats.com');

    expect(phoneNumber).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});