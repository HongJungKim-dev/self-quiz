import React from 'react';

import { size } from '../../static';

const styles = {
  title: {
    fontSize: size.smallTitle,
    fontWeight: 'bold',
    color: 'white',
    margin: '10rem 0 3rem 0',
    width: '100%',
  },
};

export default function ArchiveTitle() {
  return (
    <div css={styles.title}>아카이브</div>
  );
}
