import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Score = styled.span`
  font-family: Verdana, Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: #a58600;
  margin-left: 5px;
`;

let StarSpan = styled.span`
  cursor: pointer;
  padding-right: 2px;
  color: ${props => Number(props.star) + 1 <= Math.round(Number(props.rating)) ? '#a58600' : '#ddd'};
`;

const Stars = styled.div`
  margin-top: 8px;
  color: #ddd;
  font-family:  -apple-system,BlinkMacSystemFont,"Segoe UI",
    Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji",
    "Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  &:hover {
    color: #ddd;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    border: 1px solid #efefef;
    border-radius: 6px;
  }
  &:hover ${Score} {
    color: black;
  }
  &:hover ${StarSpan} {
    color: #ddd;
  }
`;

StarSpan = styled(StarSpan)`
  &:hover {
    color: #136cb2;
  }
`;

const Ten = styled.span`
  font-family: Verdana, Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  color: #ddd;
  margin-left: 0;
  &:hover {
    color: #ddd;
  }
`;

const ReviewRating = (props) => {
  const [hover, setHover] = useState(false);
  const [hovered, setHovered] = useState(null);

  const handleHover = (e) => {
    const hovered = Number(e.target.id[e.target.id.length - 1]);
    setHovered(hovered);
    setHover(true);
    for (let i = 0; i <= hovered; i++) {
      let star = document.getElementById(`star${i}`);
      star.style.color = '#136cb2';
    }
  };

  const handleLeave = () => {
    setHover(false);
    for (let i = 0; i <= hovered; i++) {
      let star = document.getElementById(`star${i}`);
      star.style.color = null;
    }
  };

  const starRating = [];
  for (let i = 0; i < 10; i++) {
    starRating.push(<StarSpan onMouseOver={(e) => { handleHover(e); }}
      onMouseLeave={() => { handleLeave(); }}
      hovered={hovered} key={i} star={i}
      id={`star${i}`} rating={props.movie}>&#9733;</StarSpan>);
  }
  const ScoreDisplay = hover ? hovered + 1 : props.movie;
  return (
    <Stars>
      {starRating} <Score>{ScoreDisplay}</Score>/<Ten>10</Ten>
    </Stars>
  );
};

export default ReviewRating;