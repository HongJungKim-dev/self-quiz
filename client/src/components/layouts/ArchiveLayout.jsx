import React from 'react';

import { colors } from '../../static';

const style = {
  background: `linear-gradient(90deg, ${colors.dark}, ${colors.main})`,
  width: '100%',
};

export default function ArchiveLayout({ children }) {
  return (
    <div css={style}>
      {children}
    </div>
  );
}
