/* eslint-disable */
import Educations from './Educations';

export default {
  title: "Educations",
};

export const Default = () => <Educations educationTitle={'string'} educationSchool={'string'} educationDate={{
  start: new Date,
  end: new Date,
}} educationSummary={'string'} educationSummaryBullet={[]} educationSkills={[]} educationLinkWebsite={[]} />;

Default.story = {
  name: 'default',
};
