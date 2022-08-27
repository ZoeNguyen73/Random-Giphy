import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GifDisplay from './components/GifDisplay';
import Search from './components/Search';
import RatingFilter from './components/RatingFilter';

function App() {
  const [gif, setGif] = useState('');
  const giphyApiKey = 'rCfGtBzitrTNFpZMYAgob9DB5ZgrBqgH';
  const [rating, setRating] = useState('g');

  const getRandomGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&rating=${rating}`;
    console.log(`api url for random gif is ${url}`);
    const gifData  = await axios.get(url);
    setGif(gifData.data.data);
  };

  const searchGif = async (searchTerm) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&rating=${rating}&limit=1&q=${searchTerm}`;
    console.log(`api url for search gif is ${url}`);
    const gifData = await axios.get(url);
    setGif(gifData.data.data[0]);
  }

  useEffect(
    () => {
      getRandomGif();
    },
    [rating]
  );

  return (
    <div className="App">
      <h1>GIPHEE</h1>

      <Search onSearchSubmit={searchGif}/>
      <RatingFilter currentRating={rating} onRatingSubmit={setRating}/>

      <div className="divider"></div>

      <GifDisplay gif={gif} />


    </div>
  );
}

export default App;
