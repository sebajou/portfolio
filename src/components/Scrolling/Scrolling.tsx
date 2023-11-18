import React, { FC } from 'react';
import Presentation from '../Presentation/Presentation';
import Projectpage from '../Projectpage/Projectpage';
import Services from '../Services/Services';
import Resumes from '../Resumes/Resumes';


interface ScrollingProps {}
const projectsJson = {
  wordwidespring: {
    title: "WordWideSpring",
    summary: "",
    imageUrl: ""
  }, 
  yogurtmaker: {
    title: "Yogurtmaker",
    summary: "",
    imageUrl: ""
  }, 
  protfolio: {
    title: "Portfolio",
    summary: "",
    imageUrl: ""
  }
};
const arr : any[] = []
Object.keys(projectsJson).forEach(function(innerAttr, index) {
  arr.push(innerAttr[index]);
});

const Scrolling: FC<ScrollingProps> = () => (
  <div className='h-screen bg-local bg-emerald-800' data-testid="Scrolling">
        <div className="basis-1 bg-lime-600">
          <Presentation/>
        </div>
        {Object.values(projectsJson).map((project) => {
        return (
          <div className="basis-1 bg-lime-800">
              <Projectpage projectName={project.title}/>
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
