import React, { Component } from "react";
import Rotate from './components/Banner'
// import Toggle from './components/DarkMode'




import { ExerciseDataStore } from "./dataF/DataStore";
import { Provider } from "react-redux";
import {
  // BrowserRouter as Router,
  Route,
  Redirect, Switch,
 
} from "react-router-dom";
import { ExerciseConnector } from "./components/ExerciseConnecter";
import Recharts from './components/Charts'
import './App.css';


export default class ServerData extends Component {
  render() {
    return (
      <Provider store={ExerciseDataStore}>
    <div className="App">
      
      {/*   <h1 className="bg-dark text-white text-center white-border m-2 p-5">Anywhere Fitness
        <span className="sp float-right"><Toggle/></span> </h1> */}
       
        <div className="dk-div">
        <Rotate/>
       <Recharts/>
        
        
        </div> 
          
       
            <Route path="/fitness" component={ExerciseConnector} />
          <Redirect to ="/fitness"/>
       
        
    </div>
    </Provider>
  );
}

}