import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../components/Modal.jsx';

const selectedItem = {
    name: 'Burger',
    description: 'A tasty burger',
    image: 'burger.jpg',
    price: '$5.99'
  };

  describe('Modal Component', () => {
    it('renders the modal when show is true', () => {
      const { getByText } = render(
        <Modal show={true} onClose={() => {}} selectedItem={selectedItem} />
      );
      expect(getByText('Burger')).toBeInTheDocument();
      expect(getByText('A tasty burger')).toBeInTheDocument();
    });

    it('does not render the modal when show is false', () => {
        const { queryByText } = render(
          <Modal show={false} onClose={() => {}} selectedItem={selectedItem} />
        );
        expect(queryByText('Burger')).not.toBeInTheDocument();
      });

      it('calls onClose when the background is clicked', () => {
        const onCloseMock = jest.fn();
        const { getByTestId } = render(
          <Modal show={true} onClose={onCloseMock} selectedItem={selectedItem} />
        );
        fireEvent.click(getByTestId('modal-background'));
        expect(onCloseMock).toHaveBeenCalledTimes(1);
      });

      it('calls onClose when the close button is clicked', () => {
        const onCloseMock = jest.fn();
        const { getByText } = render(
          <Modal show={true} onClose={onCloseMock} selectedItem={selectedItem} />
        );
        fireEvent.click(getByText('×'));
        expect(onCloseMock).toHaveBeenCalledTimes(1);
      });

      it('selects and deselects combo items', () => {
        const { getByText, queryByText } = render(
          <Modal show={true} onClose={() => {}} selectedItem={selectedItem} />
        );
    
        const friesButton = getByText('Add Fries');
        const sodaButton = getByText('Add Soda');
    
        // Select fries
        fireEvent.click(friesButton);
        expect(queryByText('✓')).toBeInTheDocument();
    
        // Deselect fries
        fireEvent.click(friesButton);
        expect(queryByText('✓')).not.toBeInTheDocument();
    
        // Select soda
        fireEvent.click(sodaButton);
        expect(queryByText('✓')).toBeInTheDocument();
      });

      it('renders the add to cart button with the correct price', () => {
        const { getByText } = render(
          <Modal show={true} onClose={() => {}} selectedItem={selectedItem} />
        );
        expect(getByText(`Add to cart - ${selectedItem.price}`)).toBeInTheDocument();
      });
    });
