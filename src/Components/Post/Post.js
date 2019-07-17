import React from 'react';
import Title from './Title/Title.js';
import Video from './Video/Video.js';
import Explanation from './Explanation/Explanation.js';

function Post(props) {
  let promise = props.promise;
  let title = promise.data.title;
  let date = promise.data.date;
  let url = promise.data.url;
  let explanation = promise.data.explanation;

  return (
      <div className={'post'}>
        <Title title={title} date={date} />
        <Video url={url} />
        <Explanation text={explanation} />
      </div>
  );
}

export default Post;
