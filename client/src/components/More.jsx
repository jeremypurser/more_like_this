import React from 'react';
import styled, { css } from 'styled-components';

const Img = styled.img`
  object-fit: cover;
  width: 90px;
  height: 125px;
  max-width: 100%;
  max-height: 100%;
`;

const Frame = styled.div`
  float: left;
  overflow: auto;
  padding: 3px;
`;

const StyleDiv = styled.div`
  position: fixed;
  height: 260px;
  width: 300px;
  border: solid 1px red;
  background: white;
  top: 45px;
  left: 295px;
  z-index: 1;
`;

const StyleDiv2 = styled(StyleDiv)`
  width: 8px;
  left: 0;
`;

const View = styled.div`
  display: block;
  float: left;
`;

const Container = styled.div`
  width: 600px;
  height: 255px;
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

  fetchData() {
    return fetch('/movies')
      .then(response => {
        return response.ok ? response.json() : response;
      })
      .then(movies => {
        this.setState({ movies });
        this.setState({ prev: movies.slice(0, 6) });
        this.setState({ next: movies.slice(6) });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchData();
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
            onClick={() => { this.setState({ mosaic: 'prev' }); }}>&larr; Prev 6</Prev>
          <span> | </span>
          <Next mosaic={this.state.mosaic}
            onClick={() => { this.setState({ mosaic: 'next' }); }}>Next 6 &rarr;</Next>
        </Arrow>
        <StyleDiv />
        <StyleDiv2 />
      </div>
    );
  }
}

export default More;