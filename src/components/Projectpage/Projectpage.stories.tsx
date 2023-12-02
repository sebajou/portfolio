/* eslint-disable */
import Projectpage from './Projectpage';

export default {
  title: "Projectpage",
};

export const Default = () => <Projectpage 
  projectName={"string"}
  projectSummary={"string"}
  projectUrlImage={"string"} projectSkills={[]} linksGithub={[]} linkWebsite={"string"}  />;

Default.story = {
  name: 'default',
};
