import React from 'react';

import { color } from '../../static';

const style = {
  background: `linear-gradient(90deg, ${color.dark}, ${color.main})`,
  width: '100%',
};

export default function ArchiveLayout({ children }) {
  return (
    <div css={style}>
      {children}
    </div>
  );
}
