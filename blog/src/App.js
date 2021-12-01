
import  React from 'react'; 




import './App.css';
import {
  BrowserRouter  as Router,
  Route,

} from "react-router-dom"; 


import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import Restaurantlist from "./components/Restaurantlist";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Home from "./components/home";
import Logout from './components/Logout';

import Login from "./components/Login";
import Protected from './components/Protected';

 function App() {
  return (
    <div className="App">
      <Router>
      
        
        
        <Route path="/logout">
          <Logout/>
        </Route>
        
      
        <Route path="/login"
        render={props=>(
          <Login{...props}/>
        )}
        >
         
        </Route>
        <Protected  exact path="/Update/:id" component={RestaurantUpdate}/>
        <Protected  exact path="/Search" component={RestaurantSearch}/>
        
        <Protected  exact path="/Detail" component={RestaurantDetail}/>  
        
        
        <Protected  exact path="/Create" component={RestaurantCreate}/>
        <Protected  exact path="/List" component={Restaurantlist}/>
        <Protected  exact path="/" component={Home}/>


      </Router>
       
    </div>
  );
}

export default App;
