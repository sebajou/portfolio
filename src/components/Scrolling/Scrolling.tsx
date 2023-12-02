import React, { FC } from 'react';
import Presentation from '../Presentation/Presentation';
import Projectpage from '../Projectpage/Projectpage';
import Services from '../Services/Services';
import Resumes from '../Resumes/Resumes';
import { listProjects } from '../Projectpage/ListProject'


interface ScrollingProps {}
const projectsJson = listProjects;
const arr : any[] = []
Object.keys(projectsJson).forEach(function(innerAttr, index) {
  arr.push(innerAttr[index]);
});

const Scrolling: FC<ScrollingProps> = () => (
  <div className='bg-local m-2' data-testid="Scrolling">
        <div className="basis-1 bg-lime-600">
          <Presentation/>
        </div>
        {Object.values(projectsJson).map((project) => {
        return (
            <div className="basis-1 h-auto sm:h-[98vh] border rounded-lg border-gray-600 m-2 p-2">
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
          )})
        }

        <div className="basis-1 bg-lime-900">
          <Services/>
        </div>
        <div className="basis-1 bg-lime-400">
          <Resumes/>
        </div>
  </div>
);

export default Scrolling;
