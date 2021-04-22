import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
{/* component */ }
import Applicant from '../../../../components/pages/writePage/write/applicant/Applicant';
{/* hook */ }
import useChangeApplicantField from '../../../../hooks/pages/writePage/useChangeApplicantField';

const ApplicantContainer: React.FC<RouteComponentProps> = () => {
  const {
    belong,
    position,
    name,
    etc,
    onChangeFields,
  } = useChangeApplicantField();

  return (
    <Applicant
      belong={belong}
      position={position}
      name={name}
      etc={etc}
      onChangeFields={onChangeFields}
    />
  )
}

export default withRouter(ApplicantContainer);