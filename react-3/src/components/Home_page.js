import React from 'react';
import Navbar from '../components/mir-mitchelle/Navbar';
import Cards from '../components/mir-mitchelle/Cards'
import Yoga from '../components/mir-mitchelle/Yoga';
import Home from '../components/mir-mitchelle/Home';
import Running from '../components/mir-mitchelle/Running';
import Boxing from '../components/mir-mitchelle/Boxing';
import Cardio from '../components/mir-mitchelle/Cardio';
import InstructorSignUp from '../components/mir-mitchelle/InstructorSignUp';
import ClientSignUp from './mir-mitchelle/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Login from '../components/Login'
// import '../App..css';
import WeightLifting from '../components//mir-mitchelle/WeightLifting';

function Home_page() {
  return (
    <>
      {/* <Login/> */}
      {/* <Navbar /> */}
      <Cards/>
      <Router>
      <Switch> 
        <Route path='/' exact component={Home} />
        <Route path='/clientsignup' component={ClientSignUp}/>
      <Route path='/instructorsignup' component={InstructorSignUp} />
      <Route path='/yoga' component={Yoga}/>
      <Route path='/weightlifting' component={WeightLifting} />
      <Route path='/running' component={Running}/>
      <Route path='/boxing' component={Boxing} />
      <Route path='/cardio' component={Cardio} />
     
       </Switch>
     </Router>  
    </>
  );
}

export default Home_page;
