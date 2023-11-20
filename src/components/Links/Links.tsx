import React, { FC } from 'react';

interface LinksProps {}

const Links: FC<LinksProps> = () => (
  <div className="h-[4rem] bg-amber-200 bottom-0" data-testid="Links">
    Links Component
  </div>
);

export default Links;
