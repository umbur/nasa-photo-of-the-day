import React from 'react';
import style from 'styled-components';

const Abc = style.div`
  font-family: Times New Roman
  color: red
`;

function Title(props) {
  let {title, date} = props;

  return (
    <div className={'title-container'}>
      <Abc> <p className={'title'}>{title}</p> </Abc>
      <p className={'date'}>{date}</p>
    </div>
  );
}

export default Title;
