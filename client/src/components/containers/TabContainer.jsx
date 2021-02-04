import React from 'react';

import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { setAddingModal, setOverlay } from '../../slice';

import TabLayout from '../layouts/TabLayout';
import TabButton from '../presentationals/TabButton';
import WrittingIcon from '../icons/WrittingIcon';
import QuizIcon from '../icons/QuizIcon';
import FolderIcon from '../icons/FolderIcon';

export default function Tab() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddingButton = () => {
    dispatch(setAddingModal(true));
    dispatch(setOverlay(true));
  };

  const handleTodaysButton = () => {
    history.push('/quiz');
  };

  return (
    <TabLayout>
      <TabButton
        title="문제 추가"
        onClick={handleAddingButton}
        IconComponent={WrittingIcon}
      />
      <TabButton
        title="오늘의 문제"
        onClick={handleTodaysButton}
        IconComponent={QuizIcon}
      />
      <TabButton
        title="아카이브"
        onClick={() => history.push('/archive')}
        IconComponent={FolderIcon}
      />
    </TabLayout>
  );
}
