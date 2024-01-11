import React, { FC } from 'react';
import { HashLink } from 'react-router-hash-link';
import { listProjects } from '../Projectpage/ListProject'

interface VistcardProps {}
const projectsJson = listProjects;
const arr : any[] = []
Object.keys(projectsJson).forEach(function(innerAttr, index) {
  arr.push(innerAttr[index]);
});

const Vistcard: FC<VistcardProps> = () => (
  <div className="flex flex-col bg-cover md:bg-contain bg-rigth bg-fixed h-screen overflow-hidden bg-[url('./img/moutainStyle_4.png')] rounded-lg m-1 mb-5" data-testid="Vistcard">

    <div>

      <div className="flex items-center"> 
          <hr className="flex-grow border-t border-black ml-4"/> 
          <span className="px-3"> 
            <p><HashLink 
                  className='hover:font-bold active:font-bold focus:font-bold' 
                  smooth to={'/presentation#presentation'}>Presentation </HashLink></p>
          </span> 
      </div> 
      <div className="flex items-center"> 
          <hr className="flex-grow border-t border-black ml-4"/> 
          <span className="px-3"> 
            <p><HashLink className='hover:font-bold active:font-bold focus:font-bold' smooth to={"/projects#projects"}>Projects </HashLink></p>
          </span> 
      </div> 
      {Object.values(projectsJson).map((project) => {
        return (
          <div className="flex items-center"> 
            <hr className="flex-grow border-t border-black ml-4"/> 
            <span className="px-3"> 
              <p><HashLink className='hover:font-bold active:font-bold focus:font-bold' smooth to={`/projects#${project.title}`}>{project.title} </HashLink></p>
            </span> 
          </div> 
          )})
        }
        <div className="flex items-center"> 
            <hr className="flex-grow border-t border-black ml-4"/> 
            <span className="px-3"> 
              <p><HashLink className='hover:font-bold active:font-bold focus:font-bold' smooth to={"/services#services"}>Services </HashLink></p>
            </span> 
        </div> 
        <div className="flex items-center"> 
            <hr className="flex-grow border-t border-black ml-4"/> 
            <span className="px-3"> 
              <p><HashLink className='hover:font-bold active:font-bold focus:font-bold' smooth to={'/resumes#resumes'}>Resumes </HashLink></p>
            </span> 
        </div>       
      </div>

    <div className='basis-6/12 relative'>
      <div className='absolute bottom-1'>
        <h1 className="
            animate-slide whitespace-nowrap 
            text-gray-900 font-bold 
            text-6xl 
            drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Full Stack Developer
        </h1>
      </div>
    </div>
    <div className='basis-5/12 ml-2 text-white font-bold text-1xl text-left'>
      <h2 className='mx-1'>Node.js Back End Developer</h2>
      <h2 className='mx-1'>Python Back End Developer</h2>
      <h2 className='mx-1'>Angular Front End Developer</h2>
      <h2 className='mx-1'>MicroService Architecture</h2>
      <h2 className='mx-1'>Monolithe Architecture</h2>
      <h2 className='mx-1'>RabbitMQ broken messager</h2>
      <h2 className='mx-1'>MongoDB and PostgreSQL Data Base</h2>
      <h2 className='mx-1'>Retreival Augmented Generation Large Langage Model</h2>
    </div>
    <div className='basis-1/12'>
      <h3 className='m-1 text-right'>Based at Salt Lake City</h3>
    </div>
  </div>
);

export default Vistcard;
