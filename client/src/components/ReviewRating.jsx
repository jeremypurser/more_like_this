import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

const Score = styled.span`
  font-family: Verdana, Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: #a58600;
  margin-left: 5px;
`;

let StarSpan = styled.span`
  cursor: pointer;
  margin-right: 2px;
  color: ${props => Number(props.star) + 1 <= Number(props.rating) ? '#a58600' : '#ddd'};
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


class ReviewRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: null,
      hover: false
    };
  }

  handleHover(e) {
    const hovered = Number(e.target.id[e.target.id.length - 1]);
    this.setState({
      hovered,
      hover: true
    });
  }

  handleLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    const starRating = [];
    for (let i = 0; i < 10; i++) {
      starRating.push(<StarSpan onMouseOver={(e) => { this.handleHover(e); }}
        onMouseLeave={() => { this.handleLeave(); }}
        hovered={this.state.hovered} key={i} star={i}
        id={`star${i}`} rating={this.props.movie}>&#9733;</StarSpan>);
    }
    const ScoreDisplay = this.state.hover ? this.state.hovered + 1 : this.props.movie;
    return (
      <Stars>
        {starRating} <Score>{ScoreDisplay}</Score>/<Ten>10</Ten>
      </Stars>
    );
  }
}

export default ReviewRating;