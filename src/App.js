import React, {Component} from 'react';

import{BrowserRouter as Router,link,NavLink,Route} from 'react-router-dom';

const Home=() => <h1>Home</h1>

const About= () => <h1>About</h1>

function App(){

  return(
    <Router>
      <NavLink activeClassName="active" to="/about">About</NavLink>
      <NavLink activeClassName="active" to="/home">Home</NavLink>
      
      <Route path="/About" Component={About}></Route>
      <Route path="/Home"  Component={Home}></Route>
   
    </Router>
      
  )
}
export default App;
// class App extends Component{
//   state=[
//     {id:20,name:"king"},
//     {id:7,name:"Queen"},
//     {id:12,name:"Dhvani"},
//     {id:8,name:"Sarthak"}
// ];
  
// render()
// {
//   return(
//     <ul>
//     { this.state.map(data=>{
//       return<li key={data.id}>{data.id}:{data.name}</li>
//     })}
//   </ul>
//   );
//   }
// }
// export default App;
