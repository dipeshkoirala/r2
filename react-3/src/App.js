import React from 'react';
import Navbar from '../src/components/mir-mitchelle/Navbar';
import Cards from '../src/components/mir-mitchelle/Cards'
import Yoga from '../src/components/mir-mitchelle/Yoga';
import Home from '../src/components/mir-mitchelle/Home';
import Running from '../src/components/mir-mitchelle/Running';
import Boxing from '../src/components/mir-mitchelle/Boxing';
import Cardio from '../src/components/mir-mitchelle/Cardio';
import InstructorSignUp from '../src/components/mir-mitchelle/InstructorSignUp';
import ClientSignUp from '../src/components/mir-mitchelle/ClientSignUp';
import Footer from '../src/components/mir-mitchelle/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Login from '../src/components/Login'
// import '../src/App..css';
import WeightLifting from '../src/components//mir-mitchelle/WeightLifting';
import ServerData from './ServerData'
import Toggle from './components/DarkMode'
import PvtRoute from './components/PvtRoute';

     
function App() {
  return (
    <div className="App">
      
      <h1 className="bg-dark text-white text-center white-border m-2 p-5">Anywhere Fitness 
      <span className="sp float-right"><Toggle/></span>
     <br></br>
     <br></br>
      <button type="button" className="login btn-primary m-2 p-2 float-right" >Login</button>
      <button type="button" className="signup btn-primary m-2 p-2 float-right">Signup</button> </h1>
     <ServerData/>
      <Cards/>
     
      <Switch> 
        <Route path='/' exact component={Cards} />
        <PvtRoute exact path='/fitness' component={ServerData}/>
     
       </Switch> 
<Footer/>
    </div>
  );
}

export default App;
