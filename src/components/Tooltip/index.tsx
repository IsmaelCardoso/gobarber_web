import React from 'react';

import { Container } from './styles';

interface TootipPropsTypes {
  title: string;
  className?: string;
}

const Tootip: React.FC<TootipPropsTypes> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tootip;
