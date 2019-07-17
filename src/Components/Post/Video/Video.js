import React from 'react';

function Video(props) {
  let url = props.url;

  return (
      <div className={'video'}>
        <iframe width={'320'} height={'240'} src={url} frameBorder="0" allow={'accelerometer autoplay encrypted-media gyroscope picture-in-picture'} allowFullScreen>
        </iframe>
        {/*<img src={url} />*/}
      </div>
  );
}

export default Video;
