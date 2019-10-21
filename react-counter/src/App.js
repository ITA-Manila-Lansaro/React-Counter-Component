import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>
//           <button onClick ="addNumber()"> + </button> 
//           <button onClick = "minusNumber()"> - </button> 
//         </h1>
//         <h1>0</h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }


  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          <button onClick = {this.addNumber}> + </button> 
          <button onClick = {this.minusNumber}> - </button> 
        </h1>
        <h1>{this.state.value}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
    addNumber =  () => {
      this.setState({value : this.state.value + 1});
    }
    minusNumber =  () => {
      this.setState({value : this.state.value - 1});
    }
}


export default App;
