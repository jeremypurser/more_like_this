import React from 'react';
import styled, { css } from 'styled-components';

const Stars = styled.div`
  margin-top: 8px;
  color: #ddd;
  font-family:  -apple-system,BlinkMacSystemFont,"Segoe UI",
    Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji",
    "Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  &:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    border: 1px solid #efefef;
    border-radius: 6px;
  }
`;

const StarSpan = styled.span`
  cursor: pointer;
  margin-right: 2px;
  color: ${props => Number(props.star) + 1 <= Number(props.rating) ? '#a58600' : '#ddd'};
  &:hover {
    color: #136cb2;
  }
`;

const Score = styled.span`
  font-family: Verdana, Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: #a58600;
  margin-left: 5px;
`;

const Ten = styled(Score)`
  font-weight: normal;
  color: #ddd;
  margin-left: 0;
`;


const ReviewRating = ({movie}) => {
  const starRating = [];
  for (let i = 0; i < 10; i++) {
    starRating.push(<StarSpan key={i} star={i} rating={movie}>&#9733;</StarSpan>);
  }
  return (
    <Stars>
      {starRating} <Score>{movie}</Score>/<Ten>10</Ten>
    </Stars>
  );
};

export default ReviewRating;