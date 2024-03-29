import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Experiences from './Experiences';

describe('<Experiences />', () => {
  test('it should mount', () => {
    render(<Experiences experienceTitle={'string'} experienceCompany={'string'} experienceDate={{
      start: new Date,
      end: new Date,
    }} experienceSummary={'string'} experienceSummaryBullet={[]} experienceSkills={[]} experienceLinkWebsite={[]} />);
    
    const experiences = screen.getByTestId('Experiences');

    expect(experiences).toBeInTheDocument();
  });
});