import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button
      style={{ display: `${props.display}`, margin: `${props.margin}` }}
      onClick={() => props.callback()}
    >
      {props.label}
    </button>
  );
};

export default Button;
