import React from 'react';
import styled, { css } from 'styled-components';

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Frame = styled.span`
  display: block;
  float: left;
  width: 90px;
  height: 120px;
  padding: 3px;
`;

const View = styled.div`
  display: block;
  float: left;
`;

const Container = styled.div`
  // position: absolute;
  box-sizing: border-box;
  width: 600px;
  height: 240px;
  overflow: hidden;
  overflow-x: hidden;
  // overflow-y: hidden;
  // clip-path: ${props => props.mosaic === 'prev' ? 'inset(0 315px 0 0)' : 'inset(0 0 0 280px)' };
  transform: translateX(${props => props.mosaic === 'prev' ? '0px' : '-290px'});

  transition: clip-path: 3s;
  transition: transform 0.5s;
  margin-bottom: 10px;
`;

class More extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      prev: [],
      next: [],
      mosaic: 'prev'
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
        this.setState({ prev: this.state.movies.slice(0, 6) });
        this.setState({ next: this.state.movies.slice(6) });
      });
  }

  render() {
    return (
      <div>
        <p>More Like This</p>
        <Container mosaic={this.state.mosaic}>
          <View>
            {this.state.prev.map(movie => <Frame key={movie._id}><Img key={movie._id} src={movie.coverImage} /></Frame>)}
          </View>
          <View>
            {this.state.next.map(movie => <Frame key={movie._id}><Img key={movie._id} src={movie.coverImage} /></Frame>)}
          </View>
        </Container>
        <div>
          <a onClick={() => { this.setState({ mosaic: 'prev' }); }}>&larr; Prev 6 </a>
          <a onClick={() => { this.setState({ mosaic: 'next' }); }}>Next 6 &rarr;</a>
        </div>
      </div>
    );
  }
}

export default More;