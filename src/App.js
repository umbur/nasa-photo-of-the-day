import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Components/Header/Header.js';
import Post from './Components/Post/Post.js';

const axios = require('axios');

let defAPI = 'https://api.nasa.gov/planetary/apod?api_key=dpGik4kM4nP7gKf26s0SqiFdXViLCDBIewiNhBSN';

function App() {

  let [API, setAPI] = useState(defAPI);
  let [content, setContent] = useState('');
  useEffect(() => {
    axios.get(API)
        .then(res => {
          setContent(res);
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
  }, [API]);

  return (
    <div className="App">
      {/* We need a component for the header and post, with video title, video subcomponent, and explanation */}
      <Header />
      {content !== '' ? <Post promise={content} /> : <div>Loading...</div>}
    </div>
  );
}

export default App;
