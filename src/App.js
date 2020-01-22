import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';



class App extends React.Component {

  state = {
    isClicked: false,
    text: 'Huh?',
    toDos: []
  }
  onClickHandler = () => {
    this.setState({isClicked: !this.state.isClicked})
    console.log(`THE STATE IS ${this.state.isClicked}`);
    let newList = this.state.toDos.concat(this.state.text);
    this.setState({toDos: newList})
    this.setState({text: ''})
  }
  changeText = (e) => {
    this.setState({text: e.target.value})
  }


  render() {
    return(
      <div>
        <h1>{this.state.text}</h1>
        <ul>
          {this.state.toDos.map((item, i) => <li key={i}> {item} </li>)}
        </ul>
        <input onChange={this.changeText}></input>
        <button onClick={this.onClickHandler}>
          Add to List
        </button>
      </div>
    )
  }

}

export default App;
