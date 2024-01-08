import React, {Component} from "react";
import axios from 'axios';
import Loading from "./Loading";

class App extends  Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
      count : 0,
      loading : false 
    }
    ///bind
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e){
  e.preventDefault();
  this.getUsers();

  /// alert("ok");

}

getUsers(){
  this.setState({loading:true,count: this.state.count+3});
  axios('https://api.randomuser.me/?nat=TR&results=3&gender=female')
    //.then(response => console.log(response.data))
    .then(response=>this.setState({
      users:[...this.state.users, ...response.data.results] , 
      loading:false}))
}

componentWillMount(){
  
    this.getUsers();
}


 render(){
  const {loading,users,count} = this.state;
  return (
    <div className="App">
        <div><form onSubmit={this.handleSubmit} >
        { count } || 
          <input type="submit" value="load users" />
        </form><hr/></div>
        {  
        !loading ?
         users.map(user => (
        
        <div key={user.login.uuid}>
          <img src={ user.picture.large } alt={ user.login.username } ></img>
          { user.name.first } { user.name.last }<br/>
          { user.email } , { user.cell }
        <hr/>
        
        </div>)) : <Loading msg="lllooootaaaddinggas" /> }
    </div>
  );
        }
        }

export default App;
