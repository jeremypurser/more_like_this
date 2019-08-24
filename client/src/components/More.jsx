import React from 'react';
import styled, { css } from 'styled-components';

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Frame = styled.span`
  display: inline-block;
  width: 70px;
  height: 100px;
  padding: 3px;
`;

const Container = styled.div`
  width: 240px;
`;

class More extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      mosaic: []
    };
  }

  componentDidMount() {
    return fetch('/movies')
      .then(response => {
        return response.json();
      })
      .then(movies => {
        console.log(movies);
        this.setState({ movies });
        this.setState({ mosaic: movies.slice(0, 6)});
      });
  }

  render() {
    return (
      <Container>
        <p>More Like This</p>
        <div>
          {this.state.mosaic.map(movie => <Frame key={movie._id}><Img key={movie._id} src={movie.coverImage} /></Frame>)}
          <a onClick={() => { this.setState({ mosaic: this.state.movies.slice(0, 6) }); }}>&larr; Prev 6 </a>
          <a onClick={() => { this.setState({ mosaic: this.state.movies.slice(6) }); }}>Next 6 &rarr;</a>
        </div>
      </Container>
    );
  }
}

export default More;