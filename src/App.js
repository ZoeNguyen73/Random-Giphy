import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GifDisplay from './components/GifDisplay';

function App() {
  const [gif, setGif] = useState('');
  const giphyApiKey = 'rCfGtBzitrTNFpZMYAgob9DB5ZgrBqgH';
  // const randomEndPoint = 'api.giphy.com/v1/gifs/trending';
  // const getGifUrl = (keyWord) => {
  //   return ``
  // };

  const getRandomGif = async () => {
    const gifData  = await axios.get(`
    https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&rating=g
    `);
    console.log(JSON.stringify(gifData));
    setGif(gifData.data.data);
  };

  useEffect(
    () => {
      getRandomGif();
    },
    []
  ); 

  return (
    <div className="App">
      <h1>GIPHEE</h1>

      <div>
        {/* <button onClick={getRandomGif}>Get a random GIF</button> */}
        <GifDisplay gif={gif} />
        
      </div>

    </div>
  );
}

export default App;
