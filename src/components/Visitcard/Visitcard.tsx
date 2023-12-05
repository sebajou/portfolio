import React, { FC } from 'react';


interface VistcardProps {}

const Vistcard: FC<VistcardProps> = () => (
  <div className="flex flex-col bg-gradient-to-r from-green-300 h-screen overflow-hidden" data-testid="Vistcard">
    <div className='basis-6/12 relative'>
      <div className='absolute bottom-1'>
        <h1 className="animate-slide whitespace-nowrap text-gray-900 font-bold text-6xl">Full Stack Developer</h1>
      </div>
    </div>
    <div className='basis-5/12 ml-2 text-gray-900 font-bold text-1xl text-left'>
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
