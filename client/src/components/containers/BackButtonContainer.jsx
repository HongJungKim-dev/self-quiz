import React from 'react';

import { useHistory } from 'react-router-dom';

import BackButton from '../presentationals/BackButton';

export default function BackButtonContainer() {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/');
  };

  return (
    <BackButton onClick={handleBackButtonClick} />
  );
}
