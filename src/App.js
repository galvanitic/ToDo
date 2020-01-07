import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    isClicked: false
  }
  toggle = () => {
    this.setState({isClicked: !this.state.isClicked})
    console.log(`THE STATE IS ${this.state.isClicked}`);
  }


  render() {
    return(
      <button onClick={this.toggle}>
        Was button clicked? {this.props.onClicked}
      </button>
    )
  }

}

export default App;
