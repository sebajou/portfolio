import React, { FC } from 'react';

interface ProjectpageProps {
  projectName: String;
  projectSummary: String;
  projectUrlImage: string;
  projectSkills: string[];
  linkGithub: String;
  linkWebsite: String; 
}

const Projectpage: FC<ProjectpageProps> = (props) => (
<div className='static h-auto sm:h-screen p-4'>
  <div className="relative max-w-sm w-full lg:max-w-full lg:flex">
    <div className="h-48 lg:h-auto md:w-48 bg-contain bg-no-repeat md:bg-center md:w-4/12 invisible sm:visible" style={{ backgroundImage: `url(${props.projectUrlImage})`, }} title="Microservice architecture"/>
    <div className="bg-white justify-between leading-normal sm:w-full md:w-8/12">
      <div className="mb-8">
        <div className="text-gray-900 font-bold text-xl p-4 mb-2 top-0">{props.projectName}</div>
        <p className="text-gray-700 text-base p-4 items-center">{props.projectSummary}</p>
      </div>
    </div>
  </div>
  <div className="static bottom-0 w-full">
    <div className="px-6 pt-4 pb-2">
      {props.projectSkills.map((skill) => {
        return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{skill}</span>
      })}
    </div>
    <div className="inline-block">
    Github Links: {props.linkGithub} - Website Links: {props.linkWebsite}
    </div>
  </div>
</div>
);

export default Projectpage;