import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Educations from './Educations';

describe('<Educations />', () => {
  test('it should mount', () => {
    render(<Educations educationTitle={'string'} educationSchool={'string'} educationDate={{
      start: new Date,
      end: new Date,
    }} educationSummary={'stiring'} educationSummaryBullet={[]} educationSkills={[]} educationLinkWebsite={[]} />);
    
    const educations = screen.getByTestId('Educations');

    expect(educations).toBeInTheDocument();
  });
});