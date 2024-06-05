import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Carousel from '../app/components/carousel';
import '@testing-library/jest-dom';

jest.useFakeTimers();

test('renders images correctly', () => {
  render(<Carousel />);
  const images = screen.getAllByRole('img');
  
  expect(images.length).toBe(3);
  expect(images[0]).toHaveAttribute('src', '/cheeseburger-8678826_1280.jpg');
  expect(images[1]).toHaveAttribute('src', '/ice-cream-1274894_1280.jpg');
  expect(images[2]).toHaveAttribute('src', '/drink-462776_1280.jpg');
});

test('next button advances to the next image', () => {
  render(<Carousel />);
  const nextButton = screen.getByTestId('next-button');
  fireEvent.click(nextButton);

  // Add assertions to check if the next image is now active
});

test('previous button goes to the previous image', () => {
  render(<Carousel />);
  const prevButton = screen.getByTestId('prev-button');
  fireEvent.click(prevButton);

  // Add assertions to check if the previous image is now active
});

test('clicking on a dot indicator changes the active image', () => {
  render(<Carousel />);
  const dots = screen.getAllByTestId(/dot-\d+/);
  fireEvent.click(dots[1]); // Clicking on the second dot

  // Add assertions to check if the second image is now active
});

test('autoplay cycles through images every 3 seconds', () => {
  render(<Carousel />);
  jest.advanceTimersByTime(3000);
  expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
});

test('dot indicators reflect the current active image', () => {
  render(<Carousel />);
  const dots = screen.getAllByTestId(/dot-\d+/);
  fireEvent.click(dots[1]);
  jest.advanceTimersByTime(3000); // Wait for autoplay to change the image
  expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
});