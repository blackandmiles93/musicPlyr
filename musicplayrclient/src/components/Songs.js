import React, { Component } from "react";

const myHeaders = new Headers({
  "Content-Type": "application/json",
  mode: "no-cors"
});

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }
  componentDidMount() {
    // fetch call to musicPlyr backend
    fetch("http://localhost:5000/music", myHeaders)
      .then(res => res.json())
      .then(data => this.setState({ songs: data.songs }))
      .catch(error => console.log(error));
  }
  // Render a list of html audio elements for each song
  render() {
    return <div>{console.log(this.state.songs)}</div>;
  }
}

export default Songs;
