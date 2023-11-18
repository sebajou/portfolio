import React, { FC, useState, useEffect} from 'react';
import styles from './Presentation.module.css';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import presentationtext from '../../data/presentation.md';

interface PresentationProps {}

const text: string = presentationtext;

const Presentation: FC<PresentationProps> = () => (


  <div className="h-screen" data-testid="Presentation">
    Presentation Component
  </div>
);

export default Presentation;
