import React, { Component } from "react";
import Rotate from './components/Banner'
import Toggle from './components/DarkMode'



import { ExerciseDataStore } from "./dataF/DataStore";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ExerciseConnector } from "./components/ExerciseConnecter";
import Recharts from './components/Charts'
import './App.css';


export default class App extends Component {
  render() {
    return (
    <div className="App">
      
        <h1 className="bg-dark text-white text-center white-border m-2 p-5">Anywhere Fitness
        <span className="sp float-right"><Toggle/></span> </h1>
        <div className="dk-div">
        <Rotate/>
       <Recharts/>
        
        
        </div> 
          
        <Provider store={ExerciseDataStore}>
        <Router>
          <Switch>
            <Route path="/fitness" component={ExerciseConnector} />
            <Redirect to="/fitness" />
          </Switch>
        </Router>
      </Provider>   
       
        
    </div>
  );
}

}
