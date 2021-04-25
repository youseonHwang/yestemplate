import React, { useEffect } from 'react';
import TemplatePage from '../../../components/pages/templatePage/TemplatePage';
import { withRouter } from 'react-router-dom';

const TemplatePageContainer: React.FC = () => {
    return (
      <>
        <TemplatePage/>
      </>
    );
  };
  
  export default withRouter(TemplatePageContainer);