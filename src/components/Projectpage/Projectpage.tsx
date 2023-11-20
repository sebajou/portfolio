import React, { FC } from 'react';
import Links from '../Links/Links';

interface ProjectpageProps {
  projectName: String;
  projectSummary: String;
  projectUrlImage: string;
}

const Projectpage: FC<ProjectpageProps> = (props) => (
  
<div className="relative h-screen">
  <h1>{props.projectName}</h1>
  <p>{props.projectSummary}</p>
  <img src={props.projectUrlImage} alt="WordWideSpring Architecture" />
  <div
          className="bg-cover bg-center h-80 w-96"
          style={{
            backgroundImage: `url(${props.projectUrlImage})`,
          }}
        ></div>
  <div className="absolute bottom-0 left-0 bg-amber-200 w-full">
    <Links/>
  </div>
</div>

);

export default Projectpage;