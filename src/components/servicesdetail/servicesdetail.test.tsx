import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Servicesdetail from './Servicesdetail';

describe('<Servicesdetail />', () => {
  test('it should mount', () => {
    render(<Servicesdetail />);
    
    const servicesdetail = screen.getByTestId('Servicesdetail');

    expect(servicesdetail).toBeInTheDocument();
  });
});