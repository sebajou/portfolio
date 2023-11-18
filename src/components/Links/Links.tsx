import React, { FC } from 'react';
import styles from './Links.module.css';

interface LinksProps {}

const Links: FC<LinksProps> = () => (
  <div className="h-[8rem] bg-amber-200" data-testid="Links">
    Links Component
  </div>
);

export default Links;
