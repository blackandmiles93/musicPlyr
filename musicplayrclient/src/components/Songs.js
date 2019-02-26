import React, { Component } from "react";

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }
  componentDidMount() {
    // fetch call to musicPlyr backend
    fetch("http://localhost:5000/music")
      .then(res => res.json())
      .then(data => this.setState({ songs: data.songs }));
  }
  // Render a list of html audio elements for each song
  render() {
    return <div>{console.log(this.state.songs)}</div>;
  }
}

export default Songs;
