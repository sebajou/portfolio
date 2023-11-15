import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resumes from './Resumes';

describe('<Resumes />', () => {
  test('it should mount', () => {
    render(<Resumes />);
    
    const resumes = screen.getByTestId('Resumes');

    expect(resumes).toBeInTheDocument();
  });
});