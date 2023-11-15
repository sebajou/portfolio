import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resumesdetail from './Resumesdetail';

describe('<Resumesdetail />', () => {
  test('it should mount', () => {
    render(<Resumesdetail />);
    
    const resumesdetail = screen.getByTestId('Resumesdetail');

    expect(resumesdetail).toBeInTheDocument();
  });
});