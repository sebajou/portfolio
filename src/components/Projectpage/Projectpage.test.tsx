import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Projectpage from './Projectpage';

describe('<Projectpage />', () => {
  test('it should mount', () => {
    render(<Projectpage projectName={"string"} />);
    
    const projectpage = screen.getByTestId('Projectpage');

    expect(projectpage).toBeInTheDocument();
  });
});