import React from 'react';
//import { Header } from '../../Header/Header'
import style from 'styled-components'

const Text = style.div`
  border-radius: 20px
  color: blue;
`;

function Explanation(props) {
  let text = props.text;

  return (
      <div className={'explanation'}>
       <Text> <p>{text}</p> </Text>
      </div>
  );
}

export default Explanation;
