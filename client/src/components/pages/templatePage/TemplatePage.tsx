import React from 'react';
//* IMPORT_CHILD_COMPONENTS
import Title from './title/Title';
import Cards from './cards/Cards';

const TemplatePage: React.FC = () => {
  return (
    <div>
      <Title />
      <Cards />
    </div>
  );
};

export default TemplatePage;