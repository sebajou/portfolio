import React, { FC } from 'react';
import Links from '../Links/Links';

interface ProjectpageProps {
  projectName: String;
}

const Projectpage: FC<ProjectpageProps> = (props) => (
  
<div className="relative h-screen">
  <h1>{props.projectName}</h1>
  <div className="absolute bottom-0 left-0 bg-amber-200 w-full">
    <Links/>
  </div>
</div>

);

export default Projectpage;