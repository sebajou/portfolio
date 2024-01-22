/* eslint-disable */
import Experiences from './Experiences';

export default {
  title: "Experiences",
};

export const Default = () => <Experiences experienceTitle={'string'} experienceCompany={'string'} experienceDate={{
  start: new Date,
  end: new Date,
}} experienceSummary={'string'} experienceSummaryBullet={[]} experienceSkills={[]} experienceLinkWebsite={[]} />;

Default.story = {
  name: 'default',
};
