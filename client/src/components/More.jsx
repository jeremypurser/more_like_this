import React from 'react';
import Hightlight from './Highlight.jsx';
import {
  Img, Frame, StyleDiv2, View, Container, Prev, Next, Arrow
} from './StyledComponents.jsx';

class More extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      prev: [],
      next: [],
      mosaic: 'prev',
      highlighted: null
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
        this.setState({ highlighted: movies[0] });
      })
      .catch(err => {
        console.log(err);
      });
  }

  becomeHighlight(e) {
    this.setState({
      highlighted: this.state.movies[e.target.id]
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let HighlightDiv = this.state.highlighted === null ? <div></div> :
      <Hightlight movie={this.state.highlighted} />;

    return (
      <div>
        <h2>More Like This</h2>
        <Container mosaic={this.state.mosaic}>
          <View>
            {this.state.prev.map((movie, idx) => (
              <Frame key={idx}>
                <Img id={idx} key={idx}
                  onPointerEnter={(e) => { this.becomeHighlight(e); }}
                  src={movie.coverImage} />
              </Frame>)
            )}
          </View>
          <View>
            {this.state.next.map((movie, idx) => (
              <Frame key={idx}>
                <Img id={idx + 6} key={idx + 6}
                  onPointerEnter={(e) => { this.becomeHighlight(e); }}
                  src={movie.coverImage} />
              </Frame>)
            )}
          </View>
        </Container>
        <Arrow>
          <Prev mosaic={this.state.mosaic}
            onClick={() => { this.setState({ mosaic: 'prev' }); }}>&larr; Prev 6</Prev>
          <span> | </span>
          <Next mosaic={this.state.mosaic}
            onClick={() => { this.setState({ mosaic: 'next' }); }}>Next 6 &rarr;</Next>
        </Arrow>
        {HighlightDiv}
        <StyleDiv2 />
      </div>
    );
  }
}

export default More;