import React from 'react';

class More extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
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
      });
  }

  render() {
    return (
      <div>Hello world</div>
    );
  }
}

export default More;