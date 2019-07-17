import React from 'react';


function Title(props) {
  let {title, date} = props;

  return (
    <div className={'title-container'}>
      <p className={'title'}>{title}</p>
      <p className={'date'}>{date}</p>
    </div>
  );
}

export default Title;
