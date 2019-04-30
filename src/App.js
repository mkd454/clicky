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

  shuffleArray (array) {
    var x = array.length, j = 0, temp;

    while (x--) {
      j = Math.floor(Math.random()*(x+1));

      temp = array[x];
      array[x] = array[j];
      array[j] = temp;
    }
    return array;
  }

  winReset () {
    if (this.state.score === 12) {
      alert("You win! Great Job!");
      for(var i=0; i < image.length; i++) {
        image[i].clicked = false;
      }
      this.setState({ score: 0, topScore: 12 });
    }
  }

  handleScoreIncrement = id => {
    console.log(image[id-1].clicked);
    var narray = this.state.image;
    console.log(id);

    for (var y = 0; y < narray.length; y++) {
      if (id === narray[y].id) {
        console.log("Found it! " + narray[y].id);
        var identifier = narray[y];
        if(!identifier.clicked) {
          identifier.clicked = true;
          this.setState({ score: this.state.score + 1}, this.winReset);
        } else {
          alert("YOU LOSE LOSERRRRRRR");
          if (this.state.score > this.state.topScore) {
            this.setState({ topScore: this.state.score});
          }
          for(var i=0; i < image.length; i++) {
            image[i].clicked = false;
          }
          this.setState({ score: 0 });
        }
      }
    }

    var testShuffle = this.shuffleArray(narray);
    console.log(testShuffle);

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-warning">
          Clicky Game
          <a href="/"><button className="btn btn-info"><span> Reset Game </span></button></a>
          <span>Score: {this.state.score} | Top Score: {this.state.topScore}</span>
        </nav>
        <header className="header">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Clicky Game!</h1>
              <p className="lead">Click on an image to earn points, but don't click on any more than once! Try to get all 12!</p>
            </div>
          </div>
        </header>
        <main className="container">
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
        <div className="footer navbar-fixed-bottom" style={styles.footer}>
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