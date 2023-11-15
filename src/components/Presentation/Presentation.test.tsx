import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Presentation from './Presentation';

describe('<Presentation />', () => {
  test('it should mount', () => {
    render(<Presentation />);
    
    const presentation = screen.getByTestId('Presentation');

    expect(presentation).toBeInTheDocument();
  });
});