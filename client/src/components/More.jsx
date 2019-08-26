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

const StyleDiv = styled.div`
  position: fixed;
  height: 250px;
  width: 300px;
  border: solid 1px red;
  background: white;
  top: 45px;
  left: 290px;
  z-index: 1;
`;

const View = styled.div`
  display: block;
  float: left;
`;

const Container = styled.div`
  width: 600px;
  height: 240px;
  overflow: hidden;
  transform: translateX(${props => props.mosaic === 'prev' ? '0px' : '-290px'});
  transition: transform 0.5s;
  margin-bottom: 10px;
`;

const Prev = styled.a`
  color: ${props => props.mosaic === 'next' ? 'black' : '#878787' };
`;

const Next = styled.a`
  color: ${props => props.mosaic === 'next' ? '#878787' : 'black' };
`;

const Arrow = styled.div`
  margin-left: 70px;
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
        <Arrow>
          <Prev mosaic={this.state.mosaic}
            onClick={() => { this.setState({ mosaic: 'prev' }); }}>&larr; Prev 6 </Prev>
          <Next mosaic={this.state.mosaic}
            onClick={() => { this.setState({ mosaic: 'next' }); }}>Next 6 &rarr;</Next>
        </Arrow>
        <StyleDiv />
      </div>
    );
  }
}

export default More;