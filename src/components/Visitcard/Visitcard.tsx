import React, { FC } from 'react';


interface VistcardProps {}

const Vistcard: FC<VistcardProps> = () => (
  <div className="flex-1 bg-fixed h-screen bg-amber-600 overflow-y-auto" data-testid="Vistcard">
    <h1 className="animate-bounce">Full Stack Developer</h1>
  </div>
);

export default Vistcard;
