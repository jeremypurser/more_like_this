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
        this.setState({
          movies,
          prev: movies.slice(0, 6),
          next: movies.slice(6),
          highlighted: 0
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  becomeHighlight(e) {
    this.setState({
      highlighted: Number(e.target.id)
    });
  }

  handlePrev() {
    this.setState({
      mosaic: 'prev',
      highlighted: 0
    });
  }

  handleNext() {
    this.setState({
      mosaic: 'next',
      highlighted: 6
    });
  }

  incrementHighlight() {
    let current = this.state.highlighted;
    if (current === 11) {
      current = -1;
    }
    let highlighted = current + 1;
    this.setState({ highlighted });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.highlighted === 5 && this.state.highlighted === 6) {
      this.setState({mosaic: 'next'});
    } else if (prevState.highlighted === 11 && this.state.highlighted === 0) {
      this.setState({mosaic: 'prev'});
    }
  }

  render() {
    let HighlightDiv = this.state.highlighted === null ? <div></div> :
      <Hightlight movie={this.state.movies[this.state.highlighted]}
        increment={this.incrementHighlight.bind(this)} />;

    return (
      <div>
        <h2>More Like This</h2>
        <Container mosaic={this.state.mosaic}>
          <View>
            {this.state.prev.map((movie, idx) => (
              <Frame key={idx}>
                <Img id={idx} key={idx}
                  onPointerEnter={(e) => { this.becomeHighlight(e); }}
                  highlighted={this.state.highlighted}
                  src={movie.coverImage} />
              </Frame>)
            )}
          </View>
          <View>
            {this.state.next.map((movie, idx) => (
              <Frame key={idx}>
                <Img id={idx + 6} key={idx + 6}
                  onPointerEnter={(e) => { this.becomeHighlight(e); }}
                  highlighted={this.state.highlighted}
                  src={movie.coverImage} />
              </Frame>)
            )}
          </View>
        </Container>
        <Arrow>
          <Prev mosaic={this.state.mosaic}
            onClick={this.handlePrev.bind(this)}>&larr; Prev 6</Prev>
          <span> | </span>
          <Next mosaic={this.state.mosaic}
            onClick={this.handleNext.bind(this)}>Next 6 &rarr;</Next>
        </Arrow>
        {HighlightDiv}
        <StyleDiv2 />
      </div>
    );
  }
}

export default More;