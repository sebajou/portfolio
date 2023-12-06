import { FC } from 'react';

interface ServicesProps {}

const Services: FC<ServicesProps> = () => (
  <div className="h-screen m-4" id="services" data-testid="Services">
    <h1 className='text-left text-3xl'>
      <strong>Services: </strong>Like developer I can do many thinks for you: 
      </h1>
    <ul className='text-left my-4 mx-8 list-image-[url("img/bouquetin_sm_tr.svg")]'>
      <li>Web application, conception and realisation</li>
      <li>Back End development in Node.js (Nest.js, Express.js) and Python (FastAPI, Django, Flask)</li>
      <li>Front End development in Angliar and React</li>
      <li>MicroServices Architecture conception</li>
      <li>Bug fix</li>
      <li>Code Review</li>
      <li>Web application analysis</li>
    </ul>
  </div>
);

export default Services;
