import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import image from "./image.json";
import ImageCard from "./components/ImageCard"

const styles = {
  footer: {
    width: 30
  }
}

class App extends React.Component {
  state = {
    image
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-warning">
          <a href="/">Clicky Game</a>
          <span>Click an image to begin!</span>
          <span>Score: 0 | Top Score: 0</span>
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
                name={i.name}
                image={i.image}
              />
            ))}
          </Wrapper>
        </main>
        <footer class="footer bg-danger">
          <div class="bottom">
            Clicky Game! 
            <img style={styles.footer} src={logo} className="App-logo" alt="logo" />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;