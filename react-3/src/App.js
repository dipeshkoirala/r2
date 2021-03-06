import React from 'react';
// import Navbar from '../src/components/mir-mitchelle/Navbar';
import Cards from '../src/components/mir-mitchelle/Cards'
// import Yoga from '../src/components/mir-mitchelle/Yoga';
// import Home from '../src/components/mir-mitchelle/Home';
// import Running from '../src/components/mir-mitchelle/Running';
// import Boxing from '../src/components/mir-mitchelle/Boxing';
// import Cardio from '../src/components/mir-mitchelle/Cardio';
// import InstructorSignUp from '../src/components/mir-mitchelle/InstructorSignUp';
import SignUp from './components/mir-mitchelle/Signup';
import Footer from '../src/components/mir-mitchelle/Footer'
import {  Switch, Route , Link ,Redirect} from 'react-router-dom'
import Login from '../src/components/Login'
// import '../src/App..css';
// import WeightLifting from '../src/components//mir-mitchelle/WeightLifting';
import ServerData from './ServerData1'
import Toggle from './components/DarkMode'
 import PvtRoute from './components/PvtRoute';


     
function App() {

  return (
    <div className="App">
      
      <h1 className="bg-dark text-white text-center white-border m-2 p-5">Anywhere Fitness 
      <span className="sp float-right"><Toggle/></span>
     
     <br></br>
     <h3>
     <Link to ='/signup'> <button type="button" className="login btn-primary col-2 m-2 p-2 float-right" > Sign Up</button> </Link> 
     <Link to ='/login'><button type="button" className="signup btn-primary col-2 m-2 p-2 float-right" >Login</button></Link> 
     </h3></h1>
     
    <div>
    <Route  path='/signup' component={SignUp}/>
    <Route  path='/login' component={Login}/>
    <Switch> 
    <PvtRoute exact path='/protected' component={ServerData}/>
        <Route path='/'  component={Cards} />
        <Route component={Cards}/>
        
       
       </Switch> 
    </div>
  
  
      
     
       {/* <Route path='/signup' component={SignUp}/>
        
        <Route path='/login' component={Login}/>
        <Redirect to='/login'/> */}
        
     {/* <Route component={SignUp}/> */}
<Footer/>
    </div>
  );
}

export default App;
