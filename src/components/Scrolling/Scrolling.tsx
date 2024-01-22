import React, { FC } from 'react';
import Presentation from '../Presentation/Presentation';
import Projectpage from '../Projectpage/Projectpage';
import Services from '../Services/Services';
import Resumes from '../Resumes/Resumes';
import { jsonProjects } from '../Projectpage/JsonProject'


interface ScrollingProps {}

const Scrolling: FC<ScrollingProps> = () => (
  <div className='' data-testid="Scrolling">
        <div className="basis-1">
          <Presentation/>
        </div >
        <div className="basis-1" id="projects">
          {Object.values(jsonProjects).map((project) => {
          return (
            <div className='flex flex-row  min-h-screen lg:h-screen m-5'>
              <div className="min-h-screen lg:h-[98vh] border rounded-lg border-gray-600 p-2 w-[95%]" id={project.title}>
                <div className="p-2">
                  <Projectpage 
                    projectName={project.title} 
                    projectSummary={project.summary} 
                    projectUrlImage={project.imageUrl}
                    projectSkills={project.skills}
                    linksGithub={project.linksGithub}
                    linkWebsite={project.linkWebsite}
                    />
                </div>
              </div>
              <div className='w-10 origin-top-left translate-y-6 translate-x-6 rotate-90 font-black tracking-widest'>
                Project
              </div>
            </div>
            )})
          }
        </div>

        <div className="basis-1" id='services'>
          <Services/>
        </div>
        <div className='basis-1' id='resumes'>
            <Resumes/>
        </div>
  </div>
);

export default Scrolling;
