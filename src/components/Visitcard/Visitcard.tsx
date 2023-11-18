import React, { FC } from 'react';


interface VistcardProps {}

const Vistcard: FC<VistcardProps> = () => (
  <div className="flex-1 bg-fixed h-screen bg-amber-600 overflow-y-auto" data-testid="Vistcard">
    Vistcard Component
  </div>
);

export default Vistcard;
