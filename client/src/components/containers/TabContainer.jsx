import React from 'react';

import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { setAddingModal, setTodaysQuizModal, setOverlay } from '../../slice';

import TabLayout from '../layouts/TabLayout';
import TabButton from '../presentationals/TabButton';

export default function Tab() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddingButton = () => {
    dispatch(setAddingModal(true));
    dispatch(setOverlay(true));
  };

  const handleTodaysButton = () => {
    dispatch(setTodaysQuizModal(true));
    dispatch(setOverlay(true));
  };

  return (
    <TabLayout>
      <TabButton
        title="문제 추가"
        onClick={handleAddingButton}
      />
      <TabButton
        title="오늘의 문제"
        onClick={handleTodaysButton}
      />
      <TabButton
        title="아카이브"
        onClick={() => history.push('/archive')}
      />
    </TabLayout>
  );
}
