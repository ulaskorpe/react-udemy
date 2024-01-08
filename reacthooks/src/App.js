import React, {Component} from "react"; 

 class App extends Component {

  state = {
    count :0
  };

  increment = ()=>{
    this.setState({
      count : this.state.count +1 
    });
  };

  decrement = ()=>{
    this.setState({
      count : this.state.count -1
    });
  };

componentDidMount(){
  document.title = `clicked ${this.state.count} times`;
}

componentDidUpdate(){
  document.title = `clicked ${this.state.count} times - updated`;
}

  render(){
    return(
      <div>
      <h2>Counter { this.state.count}</h2>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      </div>
    );
  }

 }


export default App;
