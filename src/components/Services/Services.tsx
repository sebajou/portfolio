import { FC } from 'react';

interface ServicesProps {}

const Services: FC<ServicesProps> = () => (
  <div className="m-4" id="services" data-testid="Services">
    <h1 className='text-left text-3xl'>
      <strong>Services: </strong>Like developer I can do many thinks for you: 
    </h1>
    {
      [
        {description: 'Web application, conception and realisation', carateristics: ['Analyst', 'Understand need', 'Exchange and discussion'], color: 'orange800'},
        {description: 'Back End development in TypeScipt, JavaScript and Python', carateristics: ['Node.js', 'Nest.js', 'Express.js', 'Django', 'FastAPI', 'Flask'], color: 'orange700'},
        {description: 'Front End development', carateristics: ['Angular', 'React.js'], color: 'orange600'},
        {description: 'MicroServices Architecture conception', carateristics: ['Microservice', 'Third party API', 'RabbitMQ', 'Brodcast messager', 'Redis', 'Celery'], color: 'orange500'},
        {description: 'Bug fix', carateristics: ['Analyse', 'Stack trace', 'IDE', 'Webstorm', 'DataGrip', 'PyCharm', 'VScode'], color: 'orange400'},
        {description: 'Code Review', carateristics: [], color: 'orange200'},
        {description: 'Good practice', carateristics: ['Pair Programming', 'TDD', 'Document Driven Development', 'Hexagonal Architecture', 'Craftmanshift'], color: 'orange100'},
      ].map((e: { description: string, carateristics: string[], color: string }) => (
        <div className={`max-w-screen-lg bg-${e.color} shadow-2xl rounded-lg mx-auto text-center py-12 mt-4`}>
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
