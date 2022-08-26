import { useState, useEffect } from 'react';
import './GifDisplay.css';

function GifDisplay (props) {
  const gif = props.gif;
  const [size, setSize] = useState('original');
  const [gifUrl, setGifUrl] = useState('');
  
  useEffect(
    () => {
      if (gif) {
        updateUrl();
      };
    },
    [gif, size]
  );

  const updateUrl = () => {
    if (size === 'small') {
      setGifUrl(gif.images.fixed_height_small.url);
      return
    };
    setGifUrl(gif.images.fixed_height.url);
  };

  const changeSize = (evnt) => {
    setSize(evnt.target.id);
  }

  return (
    <div className="Gif">
      { gif ? 
        (
          <div>
            <p>Size selection</p>
            <p className="tip">current size is {size}</p>
            <div className="gif-sizes">
              <button onClick={changeSize} id="small">Small</button>
              <button onClick={changeSize} id="original">Original</button>
            </div>
            <img src={gifUrl} alt='' />
          </div>
        ) : (
          <p>No gif found</p>
        )
      }
    </div>
  )
}

export default GifDisplay;