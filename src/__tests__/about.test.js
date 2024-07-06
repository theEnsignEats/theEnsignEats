import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutPage from '../app/about/page';

describe('AboutPage', () => {
    beforeEach(() => {
      render(<AboutPage />);
    });
  
    test('renders Our History section', () => {
      expect(screen.getByText('Our History')).toBeInTheDocument();
      expect(screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'p' && content.startsWith('Welcome to Ensign Eats, the ultimate destination for the best burgers in town!')
      })).toBeInTheDocument();
      expect(screen.getByAltText('Founders')).toBeInTheDocument();
    });
  
    test('renders Our Team section', () => {
      expect(screen.getByText('Our Team')).toBeInTheDocument();
      expect(screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'p' && content.startsWith('Our dedicated team is the heart of Ensign Eats.')
      })).toBeInTheDocument();
      expect(screen.getByText('Congratulations to Monty!')).toBeInTheDocument();
      expect(screen.getByAltText('Employee of the Month')).toBeInTheDocument();
    });
  
    test('renders video in Our Team section', () => {
      const video = screen.getByTestId('kitchen-video');
      expect(video).toBeInTheDocument();
    });
  
    test('renders Awards section', () => {
      expect(screen.getByText('Here you can find the BEST in town!')).toBeInTheDocument();
      expect(screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'p' && content.startsWith('Ensign Eats has won the Best Burger in Salt Lake City award for four years in a row.')
      })).toBeInTheDocument();
      expect(screen.getAllByAltText('Best Burger Award Seal')).toHaveLength(1);
    });
  
    test('renders Best Dessert section', () => {
      expect(screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'p' && content.startsWith("Along with their burgers, Ensign Eats' Strawberry Shortcake has won the Best Dessert award.")
      })).toBeInTheDocument();
      expect(screen.getAllByAltText('Best Burger Award Seal')).toHaveLength(1);
    });
  });