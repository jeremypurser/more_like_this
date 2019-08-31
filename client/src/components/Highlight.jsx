import React from 'react';
import ReviewRating from './ReviewRating.jsx';
import {
  HighlightDiv, HighlightImg, Title, Year,
  HighlightFrame, Info, MPAA, Genre, Summary,
  H3, Btn1, Btn2
} from './StyledComponents.jsx';
import styled, { css, ThemeProvider } from 'styled-components';


const Highlight = ({movie, increment}) => {
  const ratingTheme = (rating) => {
    if (rating === 'G') {
      return {
        width: '17px',
        position: '-72px -3px'
      };
    } else if (rating === 'PG') {
      return {
        width: '27px',
        position: '-91px -3px'
      };
    } else if (rating === 'PG-13') {
      return {
        width: '44px',
        position: '-119px -3px'
      };
    } else if (rating === 'R') {
      return {
        width: '18px',
        position: '-165px -3px'
      };
    }
  };

  return (
    <HighlightDiv>
      <HighlightFrame>
        <HighlightImg src={movie.coverImage} />
        <Btn1>Add to Watchlist</Btn1>
        <Btn2 onClick={increment}>Next &rarr;</Btn2>
      </HighlightFrame>
      <Info>
        <H3><Title>{movie.title}</Title> <Year>({movie.year})</Year></H3>
        <Genre>
          <ThemeProvider theme={() => ratingTheme(movie.mpaaRating)}>
            <MPAA />
          </ThemeProvider> {movie.genre.join(' | ')}
        </Genre>
        <ReviewRating movie={movie.reviewRating} />
        <Summary>{movie.summary}</Summary>
        <Summary><strong>Director:</strong> {movie.director}</Summary>
        <Summary><strong>Stars:</strong> {movie.stars.join(', ')}</Summary>
      </Info>
    </HighlightDiv>
  );
};

export default Highlight;