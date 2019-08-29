import React from 'react';
import { HighlightDiv, HighlightImg,
  HighlightFrame, Info } from './StyledComponents.jsx';

const Highlight = ({movie, increment}) => (
  <HighlightDiv>
    <HighlightFrame>
      <HighlightImg src={movie.coverImage} />
      <button>Add to Watchlist</button>
      <button onClick={increment}>Next &rarr;</button>
    </HighlightFrame>
    <Info>
      <h3>{movie.title} <span>({movie.year})</span></h3>
      <p><span>{movie.mpaaRating}</span>{movie.genre}</p>
      <p>{movie.summary}</p>
      <p>Director: {movie.director}</p>
      <p>Stars: {movie.stars}</p>
    </Info>
  </HighlightDiv>
);

export default Highlight;