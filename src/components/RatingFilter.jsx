import './RatingFilter.css';

function RatingFilter(props) {

  const ratingSubmit = (evnt) => {
    props.onRatingSubmit(evnt.target.id);
  }

  return (
    <div className="rating-filter" id="rating-parent" onClick={ratingSubmit}>
      <h2>Select a rating</h2>
      <p className="tip">Current rating is {props.currentRating}</p>
      <button id="g">g</button>
      <button id="pg">pg</button>
      <button id="pg-13">pg-13</button>
      <button id="r">r</button>
    </div>
  )

}

export default RatingFilter;