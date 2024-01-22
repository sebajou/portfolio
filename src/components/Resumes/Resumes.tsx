import React, { FC } from 'react';
import Experiences from '../Experiences/Experiences';
import Educations from '../Educations/Educations';
import { jsonExperiences, jsonEducations } from '../Resumes/JsonResumes';

interface ResumesProps {}

const Resumes: FC<ResumesProps> = () => (
  <div className="basis-1">
      {Object.values(jsonExperiences).map((experience) => {
      return (
        <div className='flex flex-row m-5' id={`${experience.title}`}>
          <div className='w-10 origin-top-left translate-y-6 translate-x-6 rotate-90 font-black tracking-widest'>
            Resumes
          </div>
          <div className="border rounded-lg border-gray-600 p-2 w-[95%]" id={experience.title}>
            <div className="p-2">
              <Experiences 
                experienceTitle={experience.title} 
                experienceCompany={experience.company}
                experienceDate={experience.date}
                experienceSummary={experience.summary} 
                experienceSummaryBullet={experience.bulletsummary}
                experienceSkills={experience.skills}
                experienceLinkWebsite={experience.linkWebsite}
                />
            </div>
          </div>
          <div className='w-10 origin-top-left translate-y-6 translate-x-6 rotate-90 font-black tracking-widest'>
            Experiences
          </div>
        </div>
        )})
      }
            {Object.values(jsonEducations).map((education) => {
      return (
        <div className='flex flex-row  m-5' id={`${education.title}`}>
          <div className='w-10 origin-top-left translate-y-6 translate-x-6 rotate-90 font-black tracking-widest'>
            Resumes
          </div>
          <div className="border rounded-lg border-gray-600 p-2 w-[95%]" id={education.title}>
            <div className="p-2">
              <Educations 
                educationTitle={education.title} 
                educationSchool={education.school}
                educationDate={education.date}
                educationSummary={education.summary} 
                educationSummaryBullet={education.bulletsummary}
                educationSkills={education.skills}
                educationLinkWebsite={education.linkWebsite}
                />
            </div>
          </div>
          <div className='w-10 origin-top-left translate-y-6 translate-x-6 rotate-90 font-black tracking-widest'>
            Education
          </div>
        </div>
        )})
      }
    </div>
);

export default Resumes;
