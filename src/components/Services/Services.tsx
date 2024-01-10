import { FC } from 'react';
import '../../index.css';
import '../../App.css';

interface ServicesProps {}

const Services: FC<ServicesProps> = () => (
  <div className="m-4" id="services" data-testid="Services">
    <h1 className='text-left text-3xl m-2'>
      <strong>Services: </strong>Like developer I can do many thinks for you: 
    </h1>
    {[
      {description: 'Web application, conception and realisation', carateristics: ['#Analyst', '#Understand need', '#Exchange and discussion'], color: 'mountain-900'},
      {description: 'Back End development in TypeScipt, JavaScript and Python', carateristics: ['#Node.js', '#Nest.js', '#Express.js', '#Django', '#FastAPI', '#Flask'], color: 'mountain-800'},
      {description: 'Front End development', carateristics: ['#Angular', '#React.js'], color: 'mountain-700'},
      {description: 'MicroServices Architecture conception', carateristics: ['#Microservice', '#Third party API', '#RabbitMQ', '#Brodcast messager', '#Redis', '#Celery'], color: 'mountain-600'},
      {description: 'Bug fix', carateristics: ['#Analysis', '#Stack trace', '#IDE', '#Webstorm', '#DataGrip', '#PyCharm', '#VScode'], color: 'mountain-500'},
      {description: 'Maintenance', carateristics: ['#Application analysis', '#Structurel bug find'], color: 'mountain-400'},
      {description: 'Code Review', carateristics: ['#Github', '#Gitlab'], color: 'mountain-300'},
      {description: 'Good practice', carateristics: ['#Pair Programming', '#TDD', '#Document Driven Development', '#Hexagonal Architecture', '#Craftmanshift'], color: 'mountain-200'},
    ].map((e: { description: string, carateristics: string[], color: string }) => (
      <div className={`max-w-screen-lg bg-${e.color} shadow-2xl rounded-lg mx-auto text-center py-2 mt-1`}>
        <h4 className="leading-9 font-bold tracking-tight text-white sm:leading-10">
          {e.description}
        </h4>
        <div className="flex flex-col basis-2/12 w-full">
          <div className="grow px-6 pt-4 pb-2">
            {e.carateristics.map((l: String) => (
              <span className="inline-block bg-white rounded-full text-sm font-semibold text-gray-700 px-3 py-1 mr-2 mb-2">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Services;
