import React from 'react';

function Explanation(props) {
  let text = props.text;

  return (
      <div className={'explanation'}>
        <p>{text}</p>
      </div>
  );
}

export default Explanation;
