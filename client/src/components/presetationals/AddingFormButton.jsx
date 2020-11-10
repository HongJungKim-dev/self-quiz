import React from 'react';

const style = {
  width: '100%',
  marginTop: '2rem',
  height: '3rem',
  fontSize: '1.4rem',
  fontWeight: 'bold',
  color: 'white',
  background: '#244a72',
  border: 'none',
  borderRadius: '0.5rem',
};

export default function AddingFormButton({ title, onClick }) {
  return (
    <button onClick={onClick} css={style} type="button">
      {title}
    </button>
  );
}
