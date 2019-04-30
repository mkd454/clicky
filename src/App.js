import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import image from "./image.json";
import ImageCard from "./components/ImageCard"

const styles = {
  footerImage: {
    width: 30
  },
  footer: {
    background: "#6956af",
    height: "50px",
    position: "relative",
    color: "#fff",
    overflow: "hidden"
  },
  bottom: {
    position: "absolute",
    marginTop: -100,
    marginLeft: 10
  }
}

class App extends React.Component {
  state = {
    image,
    score: 0,
    topScore: 0,
  }

  handleScoreIncrement = id => {
    console.log(image[id-1].clicked);
    if(!image[id-1].clicked) {
      image[id-1].clicked = true;
      this.setState({ score: this.state.score + 1});
    } else {
      alert("YOU LOSE LOSERRRRRRR");
    }
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-warning">
          <a href="/">Clicky Game</a>
          <span>Click an image to begin!</span>
          <span>Score: {this.state.score} | Top Score: {this.state.topScore}</span>
        </nav>
        <header class="header">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Clicky Game!</h1>
              <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
          </div>
        </header>
        <main class="container">
          <Wrapper>
            {this.state.image.map(i => (
              <ImageCard
                id={i.id}
                key={i.id}
                clicked={i.clicked}
                name={i.name}
                image={i.image}
                handleScoreIncrement = {this.handleScoreIncrement}
              />
            ))}
          </Wrapper>
        </main>
        <div class="footer navbar-fixed-bottom" style={styles.footer}>
          <div style={styles.bottom}>
            Clicky Game! 
            <img style={styles.footerImage} src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;