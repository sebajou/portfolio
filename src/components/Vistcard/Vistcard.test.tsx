import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Vistcard from './Vistcard';

describe('<Vistcard />', () => {
  test('it should mount', () => {
    render(<Vistcard />);
    
    const vistcard = screen.getByTestId('Vistcard');

    expect(vistcard).toBeInTheDocument();
  });
});