import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Scrolling from './Scrolling';

describe('<Scrolling />', () => {
  test('it should mount', () => {
    render(<Scrolling />);
    
    const scrolling = screen.getByTestId('Scrolling');

    expect(scrolling).toBeInTheDocument();
  });
});