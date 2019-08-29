import React from 'react';
import { HiliteDiv, HighlightImg,
  HiliteFrame, Info } from './StyledComponents.jsx';

const Highlight = ({movie}) => (
  <HiliteDiv>
    <HiliteFrame>
      <HighlightImg src={movie.coverImage} />
      <button>Add to Watchlist</button>
      <button>Next &rarr;</button>
    </HiliteFrame>
    <Info>
      <h3>{movie.title} <span>({movie.year})</span></h3>
      <p><span>{movie.mpaaRating}</span>{movie.genre}</p>
      <p>{movie.summary}</p>
      <p>Director: {movie.director}</p>
      <p>Stars: {movie.stars}</p>
    </Info>
  </HiliteDiv>
);

export default Highlight;