function GifDisplay (props) {
  const gif = props.gif;
  return (
    <div className="Gif">
      <div>
        <p>Size selection</p>
        <ul className="gif-sizes">
          <li>Small</li>
          <li>Big</li>
        </ul>
      </div>
      { gif ? (
          <img src={gif.images.fixed_height.url} alt=''/>
        ) : (
          <p>No gif found</p>
        )
      }
    </div>
  )
}

export default GifDisplay;