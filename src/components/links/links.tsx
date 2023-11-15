import React, { FC } from 'react';
import styles from './links.module.css';

interface LinksProps {}

const Links: FC<LinksProps> = () => (
  <div className={styles.Links} data-testid="Links">
    Links Component
  </div>
);

export default Links;
