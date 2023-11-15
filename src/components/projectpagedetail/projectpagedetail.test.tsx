import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Projectpagedetail from './Projectpagedetail';

describe('<Projectpagedetail />', () => {
  test('it should mount', () => {
    render(<Projectpagedetail />);
    
    const projectpagedetail = screen.getByTestId('Projectpagedetail');

    expect(projectpagedetail).toBeInTheDocument();
  });
});