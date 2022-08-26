import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GifDisplay from './components/GifDisplay';
import Search from './components/Search';

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
    setGif(gifData.data.data);
  };

  const searchGif = async (searchTerm) => {
    console.log(`search fn triggered`);
    const gifData = await axios.get(`
      https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&rating=g&limit=1&q=${searchTerm}
    `);
    setGif(gifData.data.data[0]);
  }

  useEffect(
    () => {
      getRandomGif();
    },
    []
  );

  return (
    <div className="App">
      <h1>GIPHEE</h1>

      <Search onSearchSubmit={searchGif}/>

      <div className="divider"></div>

      <GifDisplay gif={gif} />


    </div>
  );
}

export default App;
