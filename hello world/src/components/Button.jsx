import React from 'react';

function Button({ label }) {
  return (
    <div className="buttondiv">
      <button className="custombutton">{label}</button>
    </div>
  );
}

export default Button;
